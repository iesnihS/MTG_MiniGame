const { db } = require("@vercel/postgres");
const {
  GetCatalog,
  GetCurrenStringFormat,
} = require("../src/app/lib/manageDataBase");
const { CheckCardType } = require("../src/app/lib/definitions");
const { json } = require("stream/consumers");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS Cards (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    card_inclusion INTEGER,
    card_num_decks INTEGER,
    card_potential_decks INTEGER,
    card_aetherhub_uri TEXT,
    card_archidekt_uri TEXT,
    card_color_identity TEXT[], -- Array of strings
    card_cmc INTEGER,
    card_deckstats_uri TEXT,
    card_image_normal TEXT,
    card_image_art_crop TEXT,
    card_layout TEXT,
    card_moxfield_uri TEXT,
    card_mtggoldfish_uri TEXT,
    card_name TEXT,
    card_names TEXT[], -- Array of strings
    card_prices_cardhoarder_price NUMERIC,
    card_prices_cardhoarder_url TEXT,
    card_prices_cardkingdom_price NUMERIC,
    card_prices_cardkingdom_url TEXT,
    card_prices_cardmarket_price NUMERIC,
    card_prices_cardmarket_set TEXT,
    card_prices_cardmarket_url TEXT,
    card_prices_face2face_price NUMERIC,
    card_prices_face2face_url TEXT,
    card_prices_mtgstocks TEXT,
    card_prices_scg_price NUMERIC,
    card_prices_scg_slug TEXT,
    card_prices_tcgplayer_price NUMERIC,
    card_prices_tcgplayer_url TEXT,
    card_prices_tcgl_price NUMERIC,
    card_prices_tcgl_slug TEXT,
    card_primary_type TEXT,
    card_rarity TEXT,
    card_salt INTEGER,
    card_sanitized TEXT,
    card_sanitized_wo TEXT,
    card_scryfall_uri TEXT,
    card_spellbook_uri TEXT,
    card_type TEXT,
    card_combos BOOLEAN,
    card_label TEXT,
    card_new BOOLEAN,
    card_url TEXT
    );
      `;

    let date;
    date = new Date();
    date =
      date.getUTCFullYear() +
      "-" +
      ("00" + (date.getUTCMonth() + 1)).slice(-2) +
      "-" +
      ("00" + date.getUTCDate()).slice(-2) +
      " " +
      ("00" + date.getUTCHours()).slice(-2) +
      ":" +
      ("00" + date.getUTCMinutes()).slice(-2) +
      ":" +
      ("00" + date.getUTCSeconds()).slice(-2);
    console.log(`Created "users" table the : ` + date);

    return;
    createTable;
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await client.end();
}

main();
