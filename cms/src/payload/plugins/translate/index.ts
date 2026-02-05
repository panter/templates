import { translateConfig } from "@/i18n/config"
import type { TranslateConfig } from "@panter/translate"
import type { CollectionConfig, Config } from "payload"

export const translatePlugin = createTranslatePlugin({
  translateConfig,
})

function createTranslatePlugin({
  translateConfig,
  collectionOverrides,
}: {
  translateConfig: TranslateConfig
  collectionOverrides?: Partial<CollectionConfig>
}): (config: Config) => Config {
  return (config: Config) => ({
    ...config,
    collections: [
      ...(config.collections || []),
      {
        fields: [],
        labels: {
          plural: "Static Texts",
          singular: "Static Text",
        },

        ...collectionOverrides,

        slug: "panter-translate",

        access: {
          read: () => true,
          create: () => false,
          delete: () => false,
          readVersions: () => false,
          unlock: () => false,
          update: () => false,
          admin: () => false,
          ...collectionOverrides?.access,
        },

        admin: {
          ...collectionOverrides?.admin,
          components: {
            ...collectionOverrides?.admin?.components,
            views: {
              ...collectionOverrides?.admin?.components?.views,
              list: {
                Component: {
                  path: "@/payload/plugins/translate/AdminView.tsx",
                  serverProps: { translateConfig },
                },
              },
            },
          },
        },
      },
    ],
  })
}
