import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_landing_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_landing_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_landing_problem_stat_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum_pages_blocks_landing_solution_feature_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum_pages_blocks_landing_how_it_works_steps_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum_pages_blocks_landing_how_it_works_feature_items_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum_pages_blocks_landing_audience_audience_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum_pages_blocks_landing_vision_roadmap_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum_pages_blocks_landing_impact_metric_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum_pages_blocks_landing_cta_partner_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum_pages_blocks_landing_cta_cta_box_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_landing_cta_cta_box_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_problem_stat_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_solution_feature_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_how_it_works_steps_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_how_it_works_feature_items_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_audience_audience_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_vision_roadmap_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_impact_metric_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_cta_partner_cards_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_cta_cta_box_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_landing_cta_cta_box_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_landing_footer_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_landing_footer_brand_icon" AS ENUM('arrowRight', 'building', 'building2', 'camera', 'chartColumn', 'circleAlert', 'circleCheck', 'database', 'gitCompareArrows', 'globe', 'handshake', 'layers', 'lightbulb', 'plug', 'quote', 'recycle', 'rocket', 'shield', 'shoppingCart', 'sparkles', 'target', 'trendingUp', 'users', 'usersRound');
  CREATE TABLE "pages_blocks_landing_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_landing_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_landing_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_landing_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_hero_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_landing_hero_locales" (
  	"badge_text" varchar,
  	"heading" varchar,
  	"heading_accent" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_problem_stat_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_landing_problem_stat_cards_icon" DEFAULT 'circleCheck'
  );
  
  CREATE TABLE "pages_blocks_landing_problem_stat_cards_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_problem_bullet_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_problem_bullet_items_locales" (
  	"bold_text" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_problem" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_landing_problem_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_solution_feature_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_landing_solution_feature_cards_icon" DEFAULT 'circleCheck'
  );
  
  CREATE TABLE "pages_blocks_landing_solution_feature_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_solution" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_landing_solution_locales" (
  	"badge_text" varchar,
  	"heading" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_how_it_works_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_landing_how_it_works_steps_icon" DEFAULT 'circleCheck'
  );
  
  CREATE TABLE "pages_blocks_landing_how_it_works_steps_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_how_it_works_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_landing_how_it_works_feature_items_icon" DEFAULT 'circleCheck'
  );
  
  CREATE TABLE "pages_blocks_landing_how_it_works_feature_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_how_it_works" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_landing_how_it_works_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_audience_audience_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_audience_audience_cards_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_audience_audience_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_landing_audience_audience_cards_icon" DEFAULT 'circleCheck'
  );
  
  CREATE TABLE "pages_blocks_landing_audience_audience_cards_locales" (
  	"title" varchar,
  	"footer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_audience" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_landing_audience_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_vision_roadmap_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_vision_roadmap_cards_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_vision_roadmap_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_landing_vision_roadmap_cards_icon" DEFAULT 'circleCheck'
  );
  
  CREATE TABLE "pages_blocks_landing_vision_roadmap_cards_locales" (
  	"phase" varchar,
  	"badge" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_vision_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_vision_pillars_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_landing_vision_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"badge_text" varchar,
  	"pillars_heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_impact_metric_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_landing_impact_metric_cards_icon" DEFAULT 'circleCheck'
  );
  
  CREATE TABLE "pages_blocks_landing_impact_metric_cards_locales" (
  	"value" varchar,
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_impact_status_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_impact_status_boxes_locales" (
  	"label" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_impact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_landing_impact_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"testimonial_quote" varchar,
  	"testimonial_author_name" varchar,
  	"testimonial_author_role" varchar,
  	"testimonial_organization" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_cta_partner_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_landing_cta_partner_cards_icon" DEFAULT 'circleCheck'
  );
  
  CREATE TABLE "pages_blocks_landing_cta_partner_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_landing_cta_cta_box_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_landing_cta_cta_box_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_landing_cta_cta_box_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_landing_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email" varchar,
  	"phone" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_landing_cta_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"cta_box_heading" varchar,
  	"cta_box_description" varchar,
  	"contact_text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_landing_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_landing_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_hero_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_hero_locales" (
  	"badge_text" varchar,
  	"heading" varchar,
  	"heading_accent" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_problem_stat_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_landing_problem_stat_cards_icon" DEFAULT 'circleCheck',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_problem_stat_cards_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_problem_bullet_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_problem_bullet_items_locales" (
  	"bold_text" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_problem" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_problem_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_solution_feature_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_landing_solution_feature_cards_icon" DEFAULT 'circleCheck',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_solution_feature_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_solution" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_solution_locales" (
  	"badge_text" varchar,
  	"heading" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_how_it_works_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_landing_how_it_works_steps_icon" DEFAULT 'circleCheck',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_how_it_works_steps_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_how_it_works_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_landing_how_it_works_feature_items_icon" DEFAULT 'circleCheck',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_how_it_works_feature_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_how_it_works" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_how_it_works_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_audience_audience_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_audience_audience_cards_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_audience_audience_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_landing_audience_audience_cards_icon" DEFAULT 'circleCheck',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_audience_audience_cards_locales" (
  	"title" varchar,
  	"footer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_audience" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_audience_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_vision_roadmap_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_vision_roadmap_cards_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_vision_roadmap_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_landing_vision_roadmap_cards_icon" DEFAULT 'circleCheck',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_vision_roadmap_cards_locales" (
  	"phase" varchar,
  	"badge" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_vision_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_vision_pillars_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_vision_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"badge_text" varchar,
  	"pillars_heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_impact_metric_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_landing_impact_metric_cards_icon" DEFAULT 'circleCheck',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_impact_metric_cards_locales" (
  	"value" varchar,
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_impact_status_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_impact_status_boxes_locales" (
  	"label" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_impact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_impact_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"testimonial_quote" varchar,
  	"testimonial_author_name" varchar,
  	"testimonial_author_role" varchar,
  	"testimonial_organization" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_cta_partner_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_landing_cta_partner_cards_icon" DEFAULT 'circleCheck',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_cta_partner_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_landing_cta_cta_box_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_landing_cta_cta_box_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_landing_cta_cta_box_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar,
  	"phone" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_landing_cta_locales" (
  	"heading" varchar,
  	"subtitle" varchar,
  	"cta_box_heading" varchar,
  	"cta_box_description" varchar,
  	"contact_text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "landing_footer_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_landing_footer_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "landing_footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"brand_icon" "enum_landing_footer_brand_icon" DEFAULT 'circleCheck',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "landing_footer_locales" (
  	"brand_name" varchar,
  	"copyright_text" varchar,
  	"tagline" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "landing_footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  ALTER TABLE "pages_blocks_landing_hero_links" ADD CONSTRAINT "pages_blocks_landing_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_hero_stats" ADD CONSTRAINT "pages_blocks_landing_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_hero_stats_locales" ADD CONSTRAINT "pages_blocks_landing_hero_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_hero_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_hero" ADD CONSTRAINT "pages_blocks_landing_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_hero_locales" ADD CONSTRAINT "pages_blocks_landing_hero_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_problem_stat_cards" ADD CONSTRAINT "pages_blocks_landing_problem_stat_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_problem"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_problem_stat_cards_locales" ADD CONSTRAINT "pages_blocks_landing_problem_stat_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_problem_stat_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_problem_bullet_items" ADD CONSTRAINT "pages_blocks_landing_problem_bullet_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_problem"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_problem_bullet_items_locales" ADD CONSTRAINT "pages_blocks_landing_problem_bullet_items_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_problem_bullet_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_problem" ADD CONSTRAINT "pages_blocks_landing_problem_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_problem_locales" ADD CONSTRAINT "pages_blocks_landing_problem_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_problem"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_solution_feature_cards" ADD CONSTRAINT "pages_blocks_landing_solution_feature_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_solution"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_solution_feature_cards_locales" ADD CONSTRAINT "pages_blocks_landing_solution_feature_cards_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_solution_feature_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_solution" ADD CONSTRAINT "pages_blocks_landing_solution_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_solution_locales" ADD CONSTRAINT "pages_blocks_landing_solution_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_solution"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_how_it_works_steps" ADD CONSTRAINT "pages_blocks_landing_how_it_works_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_how_it_works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_how_it_works_steps_locales" ADD CONSTRAINT "pages_blocks_landing_how_it_works_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_how_it_works_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_how_it_works_feature_items" ADD CONSTRAINT "pages_blocks_landing_how_it_works_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_how_it_works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_how_it_works_feature_items_locales" ADD CONSTRAINT "pages_blocks_landing_how_it_works_feature_items_locales_p_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_how_it_works_feature_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_how_it_works" ADD CONSTRAINT "pages_blocks_landing_how_it_works_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_how_it_works_locales" ADD CONSTRAINT "pages_blocks_landing_how_it_works_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_how_it_works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_audience_audience_cards_items" ADD CONSTRAINT "pages_blocks_landing_audience_audience_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_audience_audience_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_audience_audience_cards_items_locales" ADD CONSTRAINT "pages_blocks_landing_audience_audience_cards_items_locale_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_audience_audience_cards_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_audience_audience_cards" ADD CONSTRAINT "pages_blocks_landing_audience_audience_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_audience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_audience_audience_cards_locales" ADD CONSTRAINT "pages_blocks_landing_audience_audience_cards_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_audience_audience_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_audience" ADD CONSTRAINT "pages_blocks_landing_audience_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_audience_locales" ADD CONSTRAINT "pages_blocks_landing_audience_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_audience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_vision_roadmap_cards_items" ADD CONSTRAINT "pages_blocks_landing_vision_roadmap_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_vision_roadmap_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_vision_roadmap_cards_items_locales" ADD CONSTRAINT "pages_blocks_landing_vision_roadmap_cards_items_locales_p_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_vision_roadmap_cards_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_vision_roadmap_cards" ADD CONSTRAINT "pages_blocks_landing_vision_roadmap_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_vision_roadmap_cards_locales" ADD CONSTRAINT "pages_blocks_landing_vision_roadmap_cards_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_vision_roadmap_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_vision_pillars" ADD CONSTRAINT "pages_blocks_landing_vision_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_vision_pillars_locales" ADD CONSTRAINT "pages_blocks_landing_vision_pillars_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_vision_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_vision" ADD CONSTRAINT "pages_blocks_landing_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_vision_locales" ADD CONSTRAINT "pages_blocks_landing_vision_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_impact_metric_cards" ADD CONSTRAINT "pages_blocks_landing_impact_metric_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_impact_metric_cards_locales" ADD CONSTRAINT "pages_blocks_landing_impact_metric_cards_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_impact_metric_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_impact_status_boxes" ADD CONSTRAINT "pages_blocks_landing_impact_status_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_impact_status_boxes_locales" ADD CONSTRAINT "pages_blocks_landing_impact_status_boxes_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_impact_status_boxes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_impact" ADD CONSTRAINT "pages_blocks_landing_impact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_impact_locales" ADD CONSTRAINT "pages_blocks_landing_impact_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_cta_partner_cards" ADD CONSTRAINT "pages_blocks_landing_cta_partner_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_cta_partner_cards_locales" ADD CONSTRAINT "pages_blocks_landing_cta_partner_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_cta_partner_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_cta_cta_box_links" ADD CONSTRAINT "pages_blocks_landing_cta_cta_box_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_cta" ADD CONSTRAINT "pages_blocks_landing_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_landing_cta_locales" ADD CONSTRAINT "pages_blocks_landing_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_hero_links" ADD CONSTRAINT "_pages_v_blocks_landing_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_hero_stats" ADD CONSTRAINT "_pages_v_blocks_landing_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_hero_stats_locales" ADD CONSTRAINT "_pages_v_blocks_landing_hero_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_hero_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_hero" ADD CONSTRAINT "_pages_v_blocks_landing_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_hero_locales" ADD CONSTRAINT "_pages_v_blocks_landing_hero_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_problem_stat_cards" ADD CONSTRAINT "_pages_v_blocks_landing_problem_stat_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_problem"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_problem_stat_cards_locales" ADD CONSTRAINT "_pages_v_blocks_landing_problem_stat_cards_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_problem_stat_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_problem_bullet_items" ADD CONSTRAINT "_pages_v_blocks_landing_problem_bullet_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_problem"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_problem_bullet_items_locales" ADD CONSTRAINT "_pages_v_blocks_landing_problem_bullet_items_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_problem_bullet_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_problem" ADD CONSTRAINT "_pages_v_blocks_landing_problem_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_problem_locales" ADD CONSTRAINT "_pages_v_blocks_landing_problem_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_problem"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_solution_feature_cards" ADD CONSTRAINT "_pages_v_blocks_landing_solution_feature_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_solution"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_solution_feature_cards_locales" ADD CONSTRAINT "_pages_v_blocks_landing_solution_feature_cards_locales_pa_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_solution_feature_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_solution" ADD CONSTRAINT "_pages_v_blocks_landing_solution_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_solution_locales" ADD CONSTRAINT "_pages_v_blocks_landing_solution_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_solution"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_how_it_works_steps" ADD CONSTRAINT "_pages_v_blocks_landing_how_it_works_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_how_it_works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_how_it_works_steps_locales" ADD CONSTRAINT "_pages_v_blocks_landing_how_it_works_steps_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_how_it_works_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_how_it_works_feature_items" ADD CONSTRAINT "_pages_v_blocks_landing_how_it_works_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_how_it_works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_how_it_works_feature_items_locales" ADD CONSTRAINT "_pages_v_blocks_landing_how_it_works_feature_items_locale_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_how_it_works_feature_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_how_it_works" ADD CONSTRAINT "_pages_v_blocks_landing_how_it_works_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_how_it_works_locales" ADD CONSTRAINT "_pages_v_blocks_landing_how_it_works_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_how_it_works"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_audience_audience_cards_items" ADD CONSTRAINT "_pages_v_blocks_landing_audience_audience_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_audience_audience_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_audience_audience_cards_items_locales" ADD CONSTRAINT "_pages_v_blocks_landing_audience_audience_cards_items_loc_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_audience_audience_cards_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_audience_audience_cards" ADD CONSTRAINT "_pages_v_blocks_landing_audience_audience_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_audience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_audience_audience_cards_locales" ADD CONSTRAINT "_pages_v_blocks_landing_audience_audience_cards_locales_p_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_audience_audience_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_audience" ADD CONSTRAINT "_pages_v_blocks_landing_audience_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_audience_locales" ADD CONSTRAINT "_pages_v_blocks_landing_audience_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_audience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_vision_roadmap_cards_items" ADD CONSTRAINT "_pages_v_blocks_landing_vision_roadmap_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_vision_roadmap_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_vision_roadmap_cards_items_locales" ADD CONSTRAINT "_pages_v_blocks_landing_vision_roadmap_cards_items_locale_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_vision_roadmap_cards_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_vision_roadmap_cards" ADD CONSTRAINT "_pages_v_blocks_landing_vision_roadmap_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_vision_roadmap_cards_locales" ADD CONSTRAINT "_pages_v_blocks_landing_vision_roadmap_cards_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_vision_roadmap_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_vision_pillars" ADD CONSTRAINT "_pages_v_blocks_landing_vision_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_vision_pillars_locales" ADD CONSTRAINT "_pages_v_blocks_landing_vision_pillars_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_vision_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_vision" ADD CONSTRAINT "_pages_v_blocks_landing_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_vision_locales" ADD CONSTRAINT "_pages_v_blocks_landing_vision_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_impact_metric_cards" ADD CONSTRAINT "_pages_v_blocks_landing_impact_metric_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_impact_metric_cards_locales" ADD CONSTRAINT "_pages_v_blocks_landing_impact_metric_cards_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_impact_metric_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_impact_status_boxes" ADD CONSTRAINT "_pages_v_blocks_landing_impact_status_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_impact_status_boxes_locales" ADD CONSTRAINT "_pages_v_blocks_landing_impact_status_boxes_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_impact_status_boxes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_impact" ADD CONSTRAINT "_pages_v_blocks_landing_impact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_impact_locales" ADD CONSTRAINT "_pages_v_blocks_landing_impact_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_cta_partner_cards" ADD CONSTRAINT "_pages_v_blocks_landing_cta_partner_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_cta_partner_cards_locales" ADD CONSTRAINT "_pages_v_blocks_landing_cta_partner_cards_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_cta_partner_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_cta_cta_box_links" ADD CONSTRAINT "_pages_v_blocks_landing_cta_cta_box_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_cta" ADD CONSTRAINT "_pages_v_blocks_landing_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_landing_cta_locales" ADD CONSTRAINT "_pages_v_blocks_landing_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_footer_nav_links" ADD CONSTRAINT "landing_footer_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_footer_locales" ADD CONSTRAINT "landing_footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_footer_rels" ADD CONSTRAINT "landing_footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."landing_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_footer_rels" ADD CONSTRAINT "landing_footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_landing_hero_links_order_idx" ON "pages_blocks_landing_hero_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_hero_links_parent_id_idx" ON "pages_blocks_landing_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_hero_stats_order_idx" ON "pages_blocks_landing_hero_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_hero_stats_parent_id_idx" ON "pages_blocks_landing_hero_stats" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_hero_stats_locales_locale_parent_id_uni" ON "pages_blocks_landing_hero_stats_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_hero_order_idx" ON "pages_blocks_landing_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_hero_parent_id_idx" ON "pages_blocks_landing_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_hero_path_idx" ON "pages_blocks_landing_hero" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_landing_hero_locales_locale_parent_id_unique" ON "pages_blocks_landing_hero_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_problem_stat_cards_order_idx" ON "pages_blocks_landing_problem_stat_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_problem_stat_cards_parent_id_idx" ON "pages_blocks_landing_problem_stat_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_problem_stat_cards_locales_locale_paren" ON "pages_blocks_landing_problem_stat_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_problem_bullet_items_order_idx" ON "pages_blocks_landing_problem_bullet_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_problem_bullet_items_parent_id_idx" ON "pages_blocks_landing_problem_bullet_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_problem_bullet_items_locales_locale_par" ON "pages_blocks_landing_problem_bullet_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_problem_order_idx" ON "pages_blocks_landing_problem" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_problem_parent_id_idx" ON "pages_blocks_landing_problem" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_problem_path_idx" ON "pages_blocks_landing_problem" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_landing_problem_locales_locale_parent_id_unique" ON "pages_blocks_landing_problem_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_solution_feature_cards_order_idx" ON "pages_blocks_landing_solution_feature_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_solution_feature_cards_parent_id_idx" ON "pages_blocks_landing_solution_feature_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_solution_feature_cards_locales_locale_p" ON "pages_blocks_landing_solution_feature_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_solution_order_idx" ON "pages_blocks_landing_solution" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_solution_parent_id_idx" ON "pages_blocks_landing_solution" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_solution_path_idx" ON "pages_blocks_landing_solution" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_landing_solution_locales_locale_parent_id_uniqu" ON "pages_blocks_landing_solution_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_how_it_works_steps_order_idx" ON "pages_blocks_landing_how_it_works_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_how_it_works_steps_parent_id_idx" ON "pages_blocks_landing_how_it_works_steps" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_how_it_works_steps_locales_locale_paren" ON "pages_blocks_landing_how_it_works_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_how_it_works_feature_items_order_idx" ON "pages_blocks_landing_how_it_works_feature_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_how_it_works_feature_items_parent_id_idx" ON "pages_blocks_landing_how_it_works_feature_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_how_it_works_feature_items_locales_loca" ON "pages_blocks_landing_how_it_works_feature_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_how_it_works_order_idx" ON "pages_blocks_landing_how_it_works" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_how_it_works_parent_id_idx" ON "pages_blocks_landing_how_it_works" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_how_it_works_path_idx" ON "pages_blocks_landing_how_it_works" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_landing_how_it_works_locales_locale_parent_id_u" ON "pages_blocks_landing_how_it_works_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_audience_audience_cards_items_order_idx" ON "pages_blocks_landing_audience_audience_cards_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_audience_audience_cards_items_parent_id_idx" ON "pages_blocks_landing_audience_audience_cards_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_audience_audience_cards_items_locales_l" ON "pages_blocks_landing_audience_audience_cards_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_audience_audience_cards_order_idx" ON "pages_blocks_landing_audience_audience_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_audience_audience_cards_parent_id_idx" ON "pages_blocks_landing_audience_audience_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_audience_audience_cards_locales_locale_" ON "pages_blocks_landing_audience_audience_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_audience_order_idx" ON "pages_blocks_landing_audience" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_audience_parent_id_idx" ON "pages_blocks_landing_audience" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_audience_path_idx" ON "pages_blocks_landing_audience" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_landing_audience_locales_locale_parent_id_uniqu" ON "pages_blocks_landing_audience_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_vision_roadmap_cards_items_order_idx" ON "pages_blocks_landing_vision_roadmap_cards_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_vision_roadmap_cards_items_parent_id_idx" ON "pages_blocks_landing_vision_roadmap_cards_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_vision_roadmap_cards_items_locales_loca" ON "pages_blocks_landing_vision_roadmap_cards_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_vision_roadmap_cards_order_idx" ON "pages_blocks_landing_vision_roadmap_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_vision_roadmap_cards_parent_id_idx" ON "pages_blocks_landing_vision_roadmap_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_vision_roadmap_cards_locales_locale_par" ON "pages_blocks_landing_vision_roadmap_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_vision_pillars_order_idx" ON "pages_blocks_landing_vision_pillars" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_vision_pillars_parent_id_idx" ON "pages_blocks_landing_vision_pillars" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_vision_pillars_locales_locale_parent_id" ON "pages_blocks_landing_vision_pillars_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_vision_order_idx" ON "pages_blocks_landing_vision" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_vision_parent_id_idx" ON "pages_blocks_landing_vision" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_vision_path_idx" ON "pages_blocks_landing_vision" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_landing_vision_locales_locale_parent_id_unique" ON "pages_blocks_landing_vision_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_impact_metric_cards_order_idx" ON "pages_blocks_landing_impact_metric_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_impact_metric_cards_parent_id_idx" ON "pages_blocks_landing_impact_metric_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_impact_metric_cards_locales_locale_pare" ON "pages_blocks_landing_impact_metric_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_impact_status_boxes_order_idx" ON "pages_blocks_landing_impact_status_boxes" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_impact_status_boxes_parent_id_idx" ON "pages_blocks_landing_impact_status_boxes" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_impact_status_boxes_locales_locale_pare" ON "pages_blocks_landing_impact_status_boxes_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_impact_order_idx" ON "pages_blocks_landing_impact" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_impact_parent_id_idx" ON "pages_blocks_landing_impact" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_impact_path_idx" ON "pages_blocks_landing_impact" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_landing_impact_locales_locale_parent_id_unique" ON "pages_blocks_landing_impact_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_cta_partner_cards_order_idx" ON "pages_blocks_landing_cta_partner_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_cta_partner_cards_parent_id_idx" ON "pages_blocks_landing_cta_partner_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_landing_cta_partner_cards_locales_locale_parent" ON "pages_blocks_landing_cta_partner_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_landing_cta_cta_box_links_order_idx" ON "pages_blocks_landing_cta_cta_box_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_cta_cta_box_links_parent_id_idx" ON "pages_blocks_landing_cta_cta_box_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_cta_order_idx" ON "pages_blocks_landing_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_landing_cta_parent_id_idx" ON "pages_blocks_landing_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_landing_cta_path_idx" ON "pages_blocks_landing_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_landing_cta_locales_locale_parent_id_unique" ON "pages_blocks_landing_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_hero_links_order_idx" ON "_pages_v_blocks_landing_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_hero_links_parent_id_idx" ON "_pages_v_blocks_landing_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_hero_stats_order_idx" ON "_pages_v_blocks_landing_hero_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_hero_stats_parent_id_idx" ON "_pages_v_blocks_landing_hero_stats" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_hero_stats_locales_locale_parent_id_" ON "_pages_v_blocks_landing_hero_stats_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_hero_order_idx" ON "_pages_v_blocks_landing_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_hero_parent_id_idx" ON "_pages_v_blocks_landing_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_hero_path_idx" ON "_pages_v_blocks_landing_hero" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_hero_locales_locale_parent_id_unique" ON "_pages_v_blocks_landing_hero_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_problem_stat_cards_order_idx" ON "_pages_v_blocks_landing_problem_stat_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_problem_stat_cards_parent_id_idx" ON "_pages_v_blocks_landing_problem_stat_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_problem_stat_cards_locales_locale_pa" ON "_pages_v_blocks_landing_problem_stat_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_problem_bullet_items_order_idx" ON "_pages_v_blocks_landing_problem_bullet_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_problem_bullet_items_parent_id_idx" ON "_pages_v_blocks_landing_problem_bullet_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_problem_bullet_items_locales_locale_" ON "_pages_v_blocks_landing_problem_bullet_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_problem_order_idx" ON "_pages_v_blocks_landing_problem" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_problem_parent_id_idx" ON "_pages_v_blocks_landing_problem" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_problem_path_idx" ON "_pages_v_blocks_landing_problem" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_problem_locales_locale_parent_id_uni" ON "_pages_v_blocks_landing_problem_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_solution_feature_cards_order_idx" ON "_pages_v_blocks_landing_solution_feature_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_solution_feature_cards_parent_id_idx" ON "_pages_v_blocks_landing_solution_feature_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_solution_feature_cards_locales_local" ON "_pages_v_blocks_landing_solution_feature_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_solution_order_idx" ON "_pages_v_blocks_landing_solution" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_solution_parent_id_idx" ON "_pages_v_blocks_landing_solution" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_solution_path_idx" ON "_pages_v_blocks_landing_solution" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_solution_locales_locale_parent_id_un" ON "_pages_v_blocks_landing_solution_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_how_it_works_steps_order_idx" ON "_pages_v_blocks_landing_how_it_works_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_how_it_works_steps_parent_id_idx" ON "_pages_v_blocks_landing_how_it_works_steps" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_how_it_works_steps_locales_locale_pa" ON "_pages_v_blocks_landing_how_it_works_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_how_it_works_feature_items_order_idx" ON "_pages_v_blocks_landing_how_it_works_feature_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_how_it_works_feature_items_parent_id_idx" ON "_pages_v_blocks_landing_how_it_works_feature_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_how_it_works_feature_items_locales_l" ON "_pages_v_blocks_landing_how_it_works_feature_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_how_it_works_order_idx" ON "_pages_v_blocks_landing_how_it_works" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_how_it_works_parent_id_idx" ON "_pages_v_blocks_landing_how_it_works" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_how_it_works_path_idx" ON "_pages_v_blocks_landing_how_it_works" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_how_it_works_locales_locale_parent_i" ON "_pages_v_blocks_landing_how_it_works_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_audience_audience_cards_items_order_idx" ON "_pages_v_blocks_landing_audience_audience_cards_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_audience_audience_cards_items_parent_id_idx" ON "_pages_v_blocks_landing_audience_audience_cards_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_audience_audience_cards_items_locale" ON "_pages_v_blocks_landing_audience_audience_cards_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_audience_audience_cards_order_idx" ON "_pages_v_blocks_landing_audience_audience_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_audience_audience_cards_parent_id_idx" ON "_pages_v_blocks_landing_audience_audience_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_audience_audience_cards_locales_loca" ON "_pages_v_blocks_landing_audience_audience_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_audience_order_idx" ON "_pages_v_blocks_landing_audience" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_audience_parent_id_idx" ON "_pages_v_blocks_landing_audience" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_audience_path_idx" ON "_pages_v_blocks_landing_audience" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_audience_locales_locale_parent_id_un" ON "_pages_v_blocks_landing_audience_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_vision_roadmap_cards_items_order_idx" ON "_pages_v_blocks_landing_vision_roadmap_cards_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_vision_roadmap_cards_items_parent_id_idx" ON "_pages_v_blocks_landing_vision_roadmap_cards_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_vision_roadmap_cards_items_locales_l" ON "_pages_v_blocks_landing_vision_roadmap_cards_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_vision_roadmap_cards_order_idx" ON "_pages_v_blocks_landing_vision_roadmap_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_vision_roadmap_cards_parent_id_idx" ON "_pages_v_blocks_landing_vision_roadmap_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_vision_roadmap_cards_locales_locale_" ON "_pages_v_blocks_landing_vision_roadmap_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_vision_pillars_order_idx" ON "_pages_v_blocks_landing_vision_pillars" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_vision_pillars_parent_id_idx" ON "_pages_v_blocks_landing_vision_pillars" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_vision_pillars_locales_locale_parent" ON "_pages_v_blocks_landing_vision_pillars_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_vision_order_idx" ON "_pages_v_blocks_landing_vision" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_vision_parent_id_idx" ON "_pages_v_blocks_landing_vision" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_vision_path_idx" ON "_pages_v_blocks_landing_vision" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_vision_locales_locale_parent_id_uniq" ON "_pages_v_blocks_landing_vision_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_impact_metric_cards_order_idx" ON "_pages_v_blocks_landing_impact_metric_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_impact_metric_cards_parent_id_idx" ON "_pages_v_blocks_landing_impact_metric_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_impact_metric_cards_locales_locale_p" ON "_pages_v_blocks_landing_impact_metric_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_impact_status_boxes_order_idx" ON "_pages_v_blocks_landing_impact_status_boxes" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_impact_status_boxes_parent_id_idx" ON "_pages_v_blocks_landing_impact_status_boxes" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_impact_status_boxes_locales_locale_p" ON "_pages_v_blocks_landing_impact_status_boxes_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_impact_order_idx" ON "_pages_v_blocks_landing_impact" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_impact_parent_id_idx" ON "_pages_v_blocks_landing_impact" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_impact_path_idx" ON "_pages_v_blocks_landing_impact" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_impact_locales_locale_parent_id_uniq" ON "_pages_v_blocks_landing_impact_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_cta_partner_cards_order_idx" ON "_pages_v_blocks_landing_cta_partner_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_cta_partner_cards_parent_id_idx" ON "_pages_v_blocks_landing_cta_partner_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_cta_partner_cards_locales_locale_par" ON "_pages_v_blocks_landing_cta_partner_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_cta_cta_box_links_order_idx" ON "_pages_v_blocks_landing_cta_cta_box_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_cta_cta_box_links_parent_id_idx" ON "_pages_v_blocks_landing_cta_cta_box_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_cta_order_idx" ON "_pages_v_blocks_landing_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_landing_cta_parent_id_idx" ON "_pages_v_blocks_landing_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_landing_cta_path_idx" ON "_pages_v_blocks_landing_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_landing_cta_locales_locale_parent_id_unique" ON "_pages_v_blocks_landing_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "landing_footer_nav_links_order_idx" ON "landing_footer_nav_links" USING btree ("_order");
  CREATE INDEX "landing_footer_nav_links_parent_id_idx" ON "landing_footer_nav_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "landing_footer_locales_locale_parent_id_unique" ON "landing_footer_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "landing_footer_rels_order_idx" ON "landing_footer_rels" USING btree ("order");
  CREATE INDEX "landing_footer_rels_parent_idx" ON "landing_footer_rels" USING btree ("parent_id");
  CREATE INDEX "landing_footer_rels_path_idx" ON "landing_footer_rels" USING btree ("path");
  CREATE INDEX "landing_footer_rels_pages_id_idx" ON "landing_footer_rels" USING btree ("pages_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_landing_hero_links" CASCADE;
  DROP TABLE "pages_blocks_landing_hero_stats" CASCADE;
  DROP TABLE "pages_blocks_landing_hero_stats_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_hero" CASCADE;
  DROP TABLE "pages_blocks_landing_hero_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_problem_stat_cards" CASCADE;
  DROP TABLE "pages_blocks_landing_problem_stat_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_problem_bullet_items" CASCADE;
  DROP TABLE "pages_blocks_landing_problem_bullet_items_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_problem" CASCADE;
  DROP TABLE "pages_blocks_landing_problem_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_solution_feature_cards" CASCADE;
  DROP TABLE "pages_blocks_landing_solution_feature_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_solution" CASCADE;
  DROP TABLE "pages_blocks_landing_solution_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_how_it_works_steps" CASCADE;
  DROP TABLE "pages_blocks_landing_how_it_works_steps_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_how_it_works_feature_items" CASCADE;
  DROP TABLE "pages_blocks_landing_how_it_works_feature_items_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_how_it_works" CASCADE;
  DROP TABLE "pages_blocks_landing_how_it_works_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_audience_audience_cards_items" CASCADE;
  DROP TABLE "pages_blocks_landing_audience_audience_cards_items_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_audience_audience_cards" CASCADE;
  DROP TABLE "pages_blocks_landing_audience_audience_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_audience" CASCADE;
  DROP TABLE "pages_blocks_landing_audience_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_vision_roadmap_cards_items" CASCADE;
  DROP TABLE "pages_blocks_landing_vision_roadmap_cards_items_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_vision_roadmap_cards" CASCADE;
  DROP TABLE "pages_blocks_landing_vision_roadmap_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_vision_pillars" CASCADE;
  DROP TABLE "pages_blocks_landing_vision_pillars_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_vision" CASCADE;
  DROP TABLE "pages_blocks_landing_vision_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_impact_metric_cards" CASCADE;
  DROP TABLE "pages_blocks_landing_impact_metric_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_impact_status_boxes" CASCADE;
  DROP TABLE "pages_blocks_landing_impact_status_boxes_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_impact" CASCADE;
  DROP TABLE "pages_blocks_landing_impact_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_cta_partner_cards" CASCADE;
  DROP TABLE "pages_blocks_landing_cta_partner_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_landing_cta_cta_box_links" CASCADE;
  DROP TABLE "pages_blocks_landing_cta" CASCADE;
  DROP TABLE "pages_blocks_landing_cta_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_hero_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_hero_stats_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_hero_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_problem_stat_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_problem_stat_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_problem_bullet_items" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_problem_bullet_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_problem" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_problem_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_solution_feature_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_solution_feature_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_solution" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_solution_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_how_it_works_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_how_it_works_steps_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_how_it_works_feature_items" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_how_it_works_feature_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_how_it_works" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_how_it_works_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_audience_audience_cards_items" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_audience_audience_cards_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_audience_audience_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_audience_audience_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_audience" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_audience_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_vision_roadmap_cards_items" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_vision_roadmap_cards_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_vision_roadmap_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_vision_roadmap_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_vision_pillars" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_vision_pillars_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_vision" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_vision_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_impact_metric_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_impact_metric_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_impact_status_boxes" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_impact_status_boxes_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_impact" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_impact_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_cta_partner_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_cta_partner_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_cta_cta_box_links" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_cta_locales" CASCADE;
  DROP TABLE "landing_footer_nav_links" CASCADE;
  DROP TABLE "landing_footer" CASCADE;
  DROP TABLE "landing_footer_locales" CASCADE;
  DROP TABLE "landing_footer_rels" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_landing_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_landing_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_landing_problem_stat_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_landing_solution_feature_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_landing_how_it_works_steps_icon";
  DROP TYPE "public"."enum_pages_blocks_landing_how_it_works_feature_items_icon";
  DROP TYPE "public"."enum_pages_blocks_landing_audience_audience_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_landing_vision_roadmap_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_landing_impact_metric_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_landing_cta_partner_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_landing_cta_cta_box_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_landing_cta_cta_box_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_landing_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_landing_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_landing_problem_stat_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_landing_solution_feature_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_landing_how_it_works_steps_icon";
  DROP TYPE "public"."enum__pages_v_blocks_landing_how_it_works_feature_items_icon";
  DROP TYPE "public"."enum__pages_v_blocks_landing_audience_audience_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_landing_vision_roadmap_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_landing_impact_metric_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_landing_cta_partner_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_landing_cta_cta_box_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_landing_cta_cta_box_links_link_appearance";
  DROP TYPE "public"."enum_landing_footer_nav_links_link_type";
  DROP TYPE "public"."enum_landing_footer_brand_icon";`)
}
