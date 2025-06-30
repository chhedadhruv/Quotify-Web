import React, { useState, useEffect } from 'react';
import { HiClipboardCopy, HiShare, HiRefresh, HiGlobeAlt } from 'react-icons/hi';
import './QuoteGenerator.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Fallback quotes for offline use (same as mobile app)
  const fallbackQuotes = [
    {
      content: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      content: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      content: "Life is what happens to you while you're busy making other plans.",
      author: "John Lennon"
    },
    {
      content: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      content: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle"
    },
    {
      content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  ];

  const getRandomFallbackQuote = () => {
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
  };

  const fetchRandomQuote = async () => {
    setLoading(true);
    try {
      console.log('Attempting to fetch quote from API...');
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      let quoteData = null;
      
      // Primary API: ZenQuotes
      try {
        const zenResponse = await fetch('https://zenquotes.io/api/random', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          signal: controller.signal,
        });
        
        if (zenResponse.ok) {
          const zenData = await zenResponse.json();
          if (zenData && zenData[0] && zenData[0].q && zenData[0].a) {
            quoteData = {
              content: zenData[0].q,
              author: zenData[0].a
            };
          }
        }
      } catch (zenError) {
        console.log('ZenQuotes failed, trying backup API...');
      }
      
      // Backup API: Try Quotable if ZenQuotes fails
      if (!quoteData) {
        try {
          const quotableResponse = await fetch('https://api.quotable.io/random', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            signal: controller.signal,
          });
          
          if (quotableResponse.ok) {
            const quotableData = await quotableResponse.json();
            if (quotableData && quotableData.content && quotableData.author) {
              quoteData = {
                content: quotableData.content,
                author: quotableData.author
              };
            }
          }
        } catch (quotableError) {
          console.log('Quotable API also failed:', quotableError.message);
        }
      }
      
      clearTimeout(timeoutId);
      
      if (quoteData && quoteData.content && quoteData.author) {
        setQuote(quoteData.content);
        setAuthor(quoteData.author);
        setIsOffline(false);
      } else {
        throw new Error('No valid quote data received from any API');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      
      // Use a random fallback quote
      const fallbackQuote = getRandomFallbackQuote();
      setQuote(fallbackQuote.content);
      setAuthor(fallbackQuote.author);
      setIsOffline(true);
    } finally {
      setLoading(false);
    }
  };

  const handleNewQuote = async () => {
    if (isOffline) {
      // If offline, just show another random fallback quote
      const fallbackQuote = getRandomFallbackQuote();
      setQuote(fallbackQuote.content);
      setAuthor(fallbackQuote.author);
    } else {
      // Try to fetch from API
      fetchRandomQuote();
    }
  };

  const copyToClipboard = async () => {
    try {
      const textToCopy = `"${quote}"\n\n— ${author}`;
      await navigator.clipboard.writeText(textToCopy);
      
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const shareQuote = async () => {
    try {
      const shareMessage = `"${quote}"\n\n— ${author}\n\nShared via Quotify`;
      
      if (navigator.share) {
        await navigator.share({
          title: 'Inspiring Quote',
          text: shareMessage,
        });
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(shareMessage);
        alert('Quote copied to clipboard for sharing!');
      }
    } catch (error) {
      console.error('Failed to share quote:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <section id="quote-generator" className="quote-generator gradient-bg">
      <div className="quote-generator-container">
        <h2 id="quote-generator-heading" className="section-title" style={{ color: 'white' }}>
          Try Our Quote Generator
        </h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
          Get instant inspiration with our random quote generator
        </p>
        
        <div className="quote-card-container">
          {quote && author ? (
            <div className="quote-card card">
              <div className="quote-header">
                <div className="quote-mark">"</div>
                {isOffline && (
                  <div className="offline-indicator">
                    <HiGlobeAlt />
                    <span>Offline Mode</span>
                  </div>
                )}
              </div>
              
              <p className="quote-text">{quote}</p>
              <p className="quote-author">— {author}</p>
              
              <div className="quote-actions">
                <button
                  className="btn btn-secondary"
                  onClick={copyToClipboard}
                  disabled={loading}
                >
                  <HiClipboardCopy /> {copySuccess ? 'Copied!' : 'Copy'}
                </button>
                
                <button
                  className="btn btn-secondary"
                  onClick={shareQuote}
                  disabled={loading}
                >
                  <HiShare /> Share
                </button>
                
                <button
                  className="btn btn-primary"
                  onClick={handleNewQuote}
                  disabled={loading}
                >
                  <HiRefresh /> {loading ? 'Loading...' : 'New Quote'}
                </button>
              </div>
            </div>
          ) : (
            <div className="quote-card card loading-card">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading inspiration...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteGenerator; 