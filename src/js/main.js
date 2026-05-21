/**
 * BMC - Business and Management Club- Main Application Entry Point
 * Initializes all modules and handles application lifecycle
 */

import { CustomCursor } from './cursor.js';
import { ScrollController } from './scroll.js';
import { RevealAnimation } from './reveal.js';
import "./gallery.js"
import "./upcomingevents.js";
/**
 * Main Application Class
 * Orchestrates all modules and handles initialization
 */
class App {
  constructor() {
    this.modules = {};
    this.isInitialized = false;
  }

  /**
   * Initialize the application
   */
  init() {
    if (this.isInitialized) {
      console.warn('App already initialized');
      return;
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  /**
   * Setup all modules
   */
  setup() {

    // Initialize modules
    this.modules.cursor = new CustomCursor();
    this.modules.scroll = new ScrollController();
    this.modules.reveal = new RevealAnimation();

    this.isInitialized = true;
  }

  /**
   * Clean up and destroy modules
   */
  destroy() {

    // Destroy modules that have cleanup methods
    if (this.modules.reveal && this.modules.reveal.destroy) {
      this.modules.reveal.destroy();
    }

    this.isInitialized = false;
  }
}

// Initialize application
const app = new App();
app.init();

// Export for potential external use
export { app };