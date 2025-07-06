import React, { useState, useEffect } from 'react';
import { 
  HiCode, 
  HiLightningBolt, 
  HiDatabase, 
  HiCog, 
  HiClipboardCopy,
  HiCheck,
  HiRefresh
} from 'react-icons/hi';
import './ApiSection.css';

const ApiSection = () => {
  const [activeTab, setActiveTab] = useState('random');
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [apiError, setApiError] = useState(null);

  // Sample response for fallback when API fails due to CORS
  const sampleResponses = {
    random: {
      "_id": "n7QR1DkeA4V",
      "author": "The Buddha",
      "content": "All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.",
      "tags": ["Wisdom", "Virtue", "Honor"],
      "authorSlug": "the-buddha",
      "length": 128,
      "dateAdded": "2023-03-30",
      "dateModified": "2023-04-14"
    },
    search: {
      "quotes": [
        {
          "_id": "sample1",
          "author": "Steve Jobs",
          "content": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          "tags": ["success", "motivation"],
          "length": 82
        }
      ],
      "total": 15,
      "page": 1,
      "limit": 10
    },
    author: {
      "quotes": [
        {
          "_id": "sample2",
          "author": "Albert Einstein",
          "content": "Imagination is more important than knowledge.",
          "tags": ["wisdom", "knowledge"],
          "length": 45
        }
      ],
      "total": 12,
      "page": 1,
      "limit": 10
    },
    tags: [
      "motivation", "success", "wisdom", "love", "life", "inspiration", "happiness", "peace", "courage", "faith"
    ]
  };

  const apiEndpoints = {
    random: {
      title: 'Random Quote',
      url: 'https://quotes.dhruvchheda.com/api/quote/random',
      description: 'Get a random inspirational quote',
      icon: <HiLightningBolt />
    },
    search: {
      title: 'Search Quotes',
      url: 'https://quotes.dhruvchheda.com/api/quotes/search?q=success',
      description: 'Search quotes by content keywords',
      icon: <HiDatabase />
    },
    author: {
      title: 'Quotes by Author',
      url: 'https://quotes.dhruvchheda.com/api/quotes/author/einstein',
      description: 'Get quotes by a specific author',
      icon: <HiCode />
    },
    tags: {
      title: 'All Tags',
      url: 'https://quotes.dhruvchheda.com/api/tags',
      description: 'Get all available tags',
      icon: <HiCog />
    }
  };

  const codeExamples = {
    javascript: {
      random: `// Get a random quote
const response = await fetch('https://quotes.dhruvchheda.com/api/quote/random');
const quote = await response.json();
console.log(\`"\${quote.content}" - \${quote.author}\`);`,
      search: `// Search for quotes
const response = await fetch('https://quotes.dhruvchheda.com/api/quotes/search?q=success');
const results = await response.json();
console.log(\`Found \${results.total} quotes about success\`);`,
      author: `// Get quotes by author
const response = await fetch('https://quotes.dhruvchheda.com/api/quotes/author/einstein');
const quotes = await response.json();
console.log(\`Found \${quotes.total} Einstein quotes\`);`,
      tags: `// Get all tags
const response = await fetch('https://quotes.dhruvchheda.com/api/tags');
const tags = await response.json();
console.log('Available tags:', tags);`
    },
    python: {
      random: `import requests

# Get a random quote
response = requests.get('https://quotes.dhruvchheda.com/api/quote/random')
quote = response.json()
print(f'"{quote["content"]}" - {quote["author"]}')`,
      search: `import requests

# Search for quotes
response = requests.get('https://quotes.dhruvchheda.com/api/quotes/search?q=success')
results = response.json()
print(f'Found {results["total"]} quotes about success')`,
      author: `import requests

# Get quotes by author
response = requests.get('https://quotes.dhruvchheda.com/api/quotes/author/einstein')
quotes = response.json()
print(f'Found {quotes["total"]} Einstein quotes')`,
      tags: `import requests

# Get all tags
response = requests.get('https://quotes.dhruvchheda.com/api/tags')
tags = response.json()
print('Available tags:', tags)`
    },
    curl: {
      random: `curl -X GET "https://quotes.dhruvchheda.com/api/quote/random"`,
      search: `curl -X GET "https://quotes.dhruvchheda.com/api/quotes/search?q=success"`,
      author: `curl -X GET "https://quotes.dhruvchheda.com/api/quotes/author/einstein"`,
      tags: `curl -X GET "https://quotes.dhruvchheda.com/api/tags"`
    }
  };

  const tryApi = async (endpoint) => {
    setIsLoading(true);
    setApiError(null);
    
    try {
      const response = await fetch(apiEndpoints[endpoint].url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error('API fetch error:', error);
      
      // Show error message but use sample data for demonstration
      setApiError(`API call failed (${error.message}). Showing sample data for demonstration.`);
      setApiResponse(sampleResponses[endpoint]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  useEffect(() => {
    // Initialize with sample data and then try the API
    setApiResponse(sampleResponses.random);
    tryApi('random');
  }, []);

  return (
    <section className="api-section section">
      <div className="api-container">
        <div className="api-header">
          <h2 id="api-heading" className="section-title">Try Our Quotes API</h2>
          <p className="section-subtitle">
            Integrate powerful quote functionality into your applications with our modern REST API
          </p>
          <p className="api-note">
            💡 <strong>Note:</strong> The API is fully functional and deployed. If you see demo data below, it's due to CORS restrictions in development mode. The API works perfectly in production environments.
          </p>
          <div className="api-stats">
            <div className="api-stat">
              <span className="stat-number">2127</span>
              <span className="stat-label">Total Quotes</span>
            </div>
            <div className="api-stat">
              <span className="stat-number">100</span>
              <span className="stat-label">Requests/min</span>
            </div>
            <div className="api-stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
        </div>

        <div className="api-demo">
          <div className="api-endpoints">
            <h3 className="demo-title">Live API Demo</h3>
            <div className="endpoint-tabs">
              {Object.entries(apiEndpoints).map(([key, endpoint]) => (
                <button
                  key={key}
                  className={`endpoint-tab ${activeTab === key ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(key);
                    tryApi(key);
                  }}
                >
                  {endpoint.icon}
                  <span>{endpoint.title}</span>
                </button>
              ))}
            </div>
            
            <div className="endpoint-details">
              <div className="endpoint-info">
                <h4>{apiEndpoints[activeTab].title}</h4>
                <p>{apiEndpoints[activeTab].description}</p>
                <div className="endpoint-url">
                  <code>{apiEndpoints[activeTab].url}</code>
                  <button
                    className="try-button"
                    onClick={() => tryApi(activeTab)}
                    disabled={isLoading}
                  >
                    {isLoading ? <HiRefresh className="spinning" /> : <HiLightningBolt />}
                    Try it
                  </button>
                </div>
              </div>
              
              <div className="api-response">
                <h4>Response</h4>
                {apiError && (
                  <div className="error-message">
                    <strong>⚠️ Demo Mode:</strong> {apiError}
                    <br />
                    <small>The API works perfectly in production, but may have CORS restrictions in localhost development.</small>
                  </div>
                )}
                <div className="response-container">
                  {isLoading ? (
                    <div className="loading">Loading...</div>
                  ) : (
                    <pre className="response-json">
                      {JSON.stringify(apiResponse, null, 2)}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="code-examples">
          <h3 className="demo-title">Code Examples</h3>
          <div className="language-tabs">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                className={`language-tab ${selectedLanguage === lang ? 'active' : ''}`}
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="code-container">
            <div className="code-header">
              <span className="code-title">
                {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} - {apiEndpoints[activeTab].title}
              </span>
              <button
                className="copy-button"
                onClick={() => copyCode(codeExamples[selectedLanguage][activeTab])}
              >
                {copiedCode === codeExamples[selectedLanguage][activeTab] ? (
                  <HiCheck />
                ) : (
                  <HiClipboardCopy />
                )}
              </button>
            </div>
            <pre className="code-block">
              <code>{codeExamples[selectedLanguage][activeTab]}</code>
            </pre>
          </div>
        </div>

        <div className="api-features">
          <h3 className="demo-title">API Features</h3>
          <div className="api-features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <HiLightningBolt />
              </div>
              <h4>Fast & Reliable</h4>
              <p>Sub-100ms response times with 99.9% uptime guarantee</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <HiDatabase />
              </div>
              <h4>Rich Search</h4>
              <p>Search by content, author, tags, and length filters</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <HiCog />
              </div>
              <h4>Rate Limited</h4>
              <p>100 requests per minute with clear rate limit headers</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <HiCode />
              </div>
              <h4>RESTful</h4>
              <p>Clean JSON responses following REST conventions</p>
            </div>
          </div>
        </div>

        <div className="api-cta">
          <h3>Ready to integrate?</h3>
          <p>Start using our API today with no authentication required</p>
          <div className="cta-buttons">
            <a 
              href="https://quotes.dhruvchheda.com" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Documentation
            </a>
            <button 
              className="btn btn-outline"
              onClick={() => copyCode('https://quotes.dhruvchheda.com/api/quote/random')}
            >
              Copy Base URL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection; 