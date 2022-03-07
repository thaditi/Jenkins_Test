module.exports = {
    ci: {
      collect: {
        numberOfRuns: 1,
        url: ['https://www.qualcomm.com/products','https://www.qualcomm.com/products/audio','https://www.qualcomm.com/products/audio/bluetooth-wireless-speakers'],
        settings: {
            preset:'desktop',
          onlyCategories: [
            'performance',
            'accessibility',
            'best-practices',
            'seo',
          ],
          skipAudits: ['uses-http2'],
          chromeFlags: '--no-sandbox',
          extraHeaders: JSON.stringify({
            Cookie: 'customCookie=1;foo=bar',
          }),
        },
        psiStrategy:'desktop',
      },
      assert: {
        assertions: {
          'categories:performance': [
            'error',
            { minScore: 0.9, aggregationMethod: 'median-run' },
          ],
          'categories:accessibility': [
            'error',
            { minScore: 1, aggregationMethod: 'pessimistic' },
          ],
          'categories:best-practices': [
            'error',
            { minScore: 1, aggregationMethod: 'pessimistic' },
          ],
          'categories:seo': [
            'error',
            { minScore: 1, aggregationMethod: 'pessimistic' },
          ],
        },
      },
      upload: {
        target: 'filesystem',
          outputDir: './results'
 
      },
    },
  }
