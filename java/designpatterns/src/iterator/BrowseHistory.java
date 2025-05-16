package iterator;

// Iterator interface
public interface Iterator<T> {
    boolean hasNext();
    T current();
    T next();
}

// BrowseHistory class
public class BrowseHistory {
    private ArrayList<String> urls = new ArrayList<>();

    // Push a new URL to the history
    public void push(String url) {
        urls.add(url);
    }

    // Remove and return the last URL from the history
    public String pop() {
        if (!urls.isEmpty()) {
            String lastUrl = urls.remove(urls.size() - 1);
            return lastUrl;
        }
        return null;
    }

    // Create iterator for the history
    public Iterator<String> createIterator() {
        return new ListIterator(this);
    }

    // Inner class for ListIterator
    public class ListIterator implements Iterator<String> {
        private BrowseHistory history;
        private int index;

        public ListIterator(BrowseHistory history) {
            this.history = history;
            this.index = 0;
        }

        @Override
        public boolean hasNext() {
            return index < history.urls.size();
        }

        @Override
        public String current() {
            if (index < history.urls.size()) {
                return history.urls.get(index);
            }
            return null;
        }

        @Override
        public String next() {
            if (hasNext()) {
                String currentUrl = history.urls.get(index);
                index++;
                return currentUrl;
            }
            return null;
        }
    }
}