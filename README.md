# puppdf

Convert HTML files to PDF using Puppeteer. Useful when other tools fail to render CSS accurately.

## Install

```bash
npm install -g puppeteer-pdf
```

Or run without installing:

```bash
npx puppeteer-pdf input.html output.pdf
```

## Usage

```bash
puppeteer-pdf input.html [output.pdf]
```

The output path is optional — if omitted, the PDF is saved next to the input file with the same name.

```bash
puppeteer-pdf report.html           # → report.pdf
puppeteer-pdf report.html out.pdf   # → out.pdf
```

## Notes

- HTML is loaded as a local file, so relative paths (images, stylesheets) resolve from the input file's directory
- Output is A4, no margins, with background colors/images printed
- Requires Node.js 18+

## License

MIT
