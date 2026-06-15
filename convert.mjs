#!/usr/bin/env node
import puppeteer from "puppeteer";
import path from "path";

const [input, output] = process.argv.slice(2);

if (!input) {
  console.error("Usage: puppeteer-pdf <input.html> [output.pdf]");
  process.exit(1);
}

const inputPath = path.resolve(input);
const outputPath = output
  ? path.resolve(output)
  : inputPath.replace(/\.html?$/i, "") + ".pdf";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(`file://${inputPath}`, { waitUntil: "networkidle0" });
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await browser.close();

console.log(`Saved: ${outputPath}`);
