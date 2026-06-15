# puppdf

Made this to convert HTML files to PDF documents. Other local and web-hosted failed at accurate conversion and produced odd-looking files.

## Install

```bash
npm install -g puppdf
```

Or run without installing:

```bash
npx puppdf input.html output.pdf
```

## Usage

```bash
puppdf input.html [output.pdf]
```

The output path is optional — if omitted, the PDF is saved next to the input file with the same name.

```bash
puppdf report.html           # → report.pdf
puppdf report.html out.pdf   # → out.pdf
```

## Notes

- HTML is loaded as a local file, so relative paths (images, stylesheets) resolve from the input file's directory
- Output is A4, no margins, with background colors/images printed
- Requires Node.js 18+

## License

MIT
