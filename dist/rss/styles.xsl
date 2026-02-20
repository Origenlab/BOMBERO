<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="es">
      <head>
        <title>RSS Feed — <xsl:value-of select="/rss/channel/title"/></title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style type="text/css">
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: #f9fafb;
            padding: 2rem;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
          }
          .header {
            background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%);
            color: white;
            padding: 2rem;
            border-radius: 1rem;
            margin-bottom: 2rem;
          }
          .header h1 { font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; }
          .header p { opacity: 0.9; font-size: 0.9rem; }
          .info-box {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 0.5rem;
            padding: 1rem;
            margin-bottom: 2rem;
            font-size: 0.875rem;
          }
          .info-box strong { color: #92400e; }
          .item {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1rem;
          }
          .item h2 {
            font-size: 1.125rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 0.5rem;
          }
          .item h2 a { color: inherit; text-decoration: none; }
          .item h2 a:hover { color: #dc2626; }
          .item p { color: #6b7280; font-size: 0.9rem; }
          .item .meta { font-size: 0.75rem; color: #9ca3af; margin-top: 0.75rem; }
          .categories { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.75rem; }
          .categories span {
            background: #f3f4f6;
            color: #4b5563;
            font-size: 0.7rem;
            font-weight: 600;
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p><xsl:value-of select="/rss/channel/description"/></p>
          </div>
          <div class="info-box">
            <strong>Este es un feed RSS.</strong> Copia la URL de esta página y pégala en tu lector de feeds favorito para suscribirte a las actualizaciones del blog.
          </div>
          <xsl:for-each select="/rss/channel/item">
            <div class="item">
              <h2>
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h2>
              <p><xsl:value-of select="description"/></p>
              <div class="categories">
                <xsl:for-each select="category">
                  <span><xsl:value-of select="."/></span>
                </xsl:for-each>
              </div>
              <div class="meta">
                Por <xsl:value-of select="author"/>
              </div>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
