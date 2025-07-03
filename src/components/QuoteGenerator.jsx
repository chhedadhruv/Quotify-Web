import React, { useState, useEffect } from 'react';
import { HiClipboardCopy, HiShare, HiRefresh } from 'react-icons/hi';
import './QuoteGenerator.css';
import quotesData from '../quotes.json';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Get random quote from local quotes.json
  const getRandomQuote = () => {
    const quotes = quotesData.quotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    return {
      content: selectedQuote.content,
      author: selectedQuote.author
    };
  };

  const fetchRandomQuote = async () => {
    setLoading(true);
    try {
      // Simulate a brief loading delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const quoteData = getRandomQuote();
      setQuote(quoteData.content);
      setAuthor(quoteData.author);
    } catch (error) {
      console.error('Error selecting quote:', error);
      
      // Fallback to a default quote if something goes wrong
      setQuote("The only way to do great work is to love what you do.");
      setAuthor("Steve Jobs");
    } finally {
      setLoading(false);
    }
  };

  const handleNewQuote = async () => {
    fetchRandomQuote();
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
          Get instant inspiration from our curated collection of {quotesData.metadata.total_quotes_fetched.toLocaleString()} quotes
        </p>
        
        <div className="quote-card-container">
          {quote && author ? (
            <div className="quote-card card">
              <div className="quote-header">
                <div className="quote-mark">"</div>
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