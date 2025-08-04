.PHONY: all install clean build dev preview

# Default target
all: install build

# Install dependencies
install:
	npm install

# Clean build artifacts
clean:
	rm -rf dist
	rm -rf node_modules

# Build for production
build:
	npm run build

# Start development server
dev:
	npm run dev

# Preview production build
preview:
	npm run preview

# Install and start development
start: install dev

# Full rebuild
rebuild: clean install build
