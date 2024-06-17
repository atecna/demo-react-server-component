"use server"

import { promises as fs } from 'fs';
import path from 'path';
import { SortDescriptor } from 'react-aria-components';

/**
 * Interface représentant un stock.
 */
export interface Stock {
  symbol: string;
  name: string;
  marketCap: string;
  sector: string;
  industry: string;
}

/**
 * Retourne le chemin du fichier de la base de données.
 * @returns {string} Chemin du fichier db.json.
 */
function getDbFilePath(): string {
  return path.join(__dirname, "../../../db.json");
}

/**
 * Récupère les préférences de tri de l'utilisateur.
 * @returns {Promise<SortDescriptor>} Les préférences de tri de l'utilisateur.
 */
export async function getUserSort(): Promise<SortDescriptor> {
  const filePath = getDbFilePath();
  const data = await fs.readFile(filePath, 'utf-8');
  const json = JSON.parse(data);
  return json.userSort ? json.userSort : { column: "marketCap", direction: "ascending" };
}

/**
 * Récupère la liste des stocks.
 * @returns {Promise<Stock[]>} La liste des stocks.
 */
export async function getStonks(): Promise<Stock[]> {
  const filePath = getDbFilePath();
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data).stocks;
}

/**
 * Met à jour les préférences de tri de l'utilisateur.
 * @param {SortDescriptor} sort Les nouvelles préférences de tri.
 */
export async function setSort(sort: SortDescriptor): Promise<void> {
  const filePath = getDbFilePath();
  const data = await fs.readFile(filePath, 'utf-8');
  const json = JSON.parse(data);
  json.userSort = sort;
  await fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf-8');
}