import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "panter_translate" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "panter_translate_id" integer;
  CREATE INDEX "panter_translate_updated_at_idx" ON "panter_translate" USING btree ("updated_at");
  CREATE INDEX "panter_translate_created_at_idx" ON "panter_translate" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_panter_translate_fk" FOREIGN KEY ("panter_translate_id") REFERENCES "public"."panter_translate"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_panter_translate_id_idx" ON "payload_locked_documents_rels" USING btree ("panter_translate_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "panter_translate" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "panter_translate" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_panter_translate_fk";
  
  DROP INDEX "payload_locked_documents_rels_panter_translate_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "panter_translate_id";`)
}
