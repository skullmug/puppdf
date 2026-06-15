# puppdf

Made this to convert HTML files to PDF documents. Other local and web-hosted failed at accurate conversion and produced odd-looking files. Not yet published as npm package because 2FA must be set up with a physical key, which I don't possess.

## Usage

```bash
node convert.mjs input.html output.pdf
```

## Notes

- HTML is loaded as a local file, so relative paths (images, stylesheets) resolve from the input file's directory
- Output is A4, no margins, with background colors/images printed
- Requires Node.js 18+

## License

[MIT](LICENSE)
