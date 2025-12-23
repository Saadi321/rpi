import { useState, useEffect, useCallback } from 'react';

const BOOKMARKS_KEY = 'rpi_blog_bookmarks';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    if (stored) {
      try {
        setBookmarks(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse bookmarks:', e);
        setBookmarks([]);
      }
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const isBookmarked = useCallback((postId: string) => {
    return bookmarks.includes(postId);
  }, [bookmarks]);

  const toggleBookmark = useCallback((postId: string) => {
    setBookmarks(prev => {
      if (prev.includes(postId)) {
        return prev.filter(id => id !== postId);
      }
      return [...prev, postId];
    });
  }, []);

  const addBookmark = useCallback((postId: string) => {
    setBookmarks(prev => {
      if (!prev.includes(postId)) {
        return [...prev, postId];
      }
      return prev;
    });
  }, []);

  const removeBookmark = useCallback((postId: string) => {
    setBookmarks(prev => prev.filter(id => id !== postId));
  }, []);

  const clearBookmarks = useCallback(() => {
    setBookmarks([]);
  }, []);

  return {
    bookmarks,
    isBookmarked,
    toggleBookmark,
    addBookmark,
    removeBookmark,
    clearBookmarks,
  };
};
