const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'font-1': ['Inter', 'sans-serif'],
        'font-2': ['Space Grotesk', 'sans-serif'],
        'font-3': ['Poppins', 'sans-serif'],
        'font-4': ['Roboto Mono', 'monospace'],
        'font-5': ['Fira Code', 'monospace'],
        'font-6': ['Playfair Display', 'serif'],
        'font-7': ['Lora', 'serif'],
        'font-8': ['Bebas Neue', 'sans-serif'],
        'font-9': ['Oswald', 'sans-serif'],
        'font-10': ['Anton', 'sans-serif'],
        'font-11': ['Merriweather', 'serif'],
        'font-12': ['JetBrains Mono', 'monospace'],
      },
      
        transitionProperty: {
          width: 'width',
        },
      },
  },
  plugins: [require('daisyui'),  require('@tailwindcss/typography')]
  ,
  daisyui: {
    themes: [
      {
        'light': {  // main App theme Light
        },
        'dark': {   // main App them Dark 
        },

        //Template 1
        '1theme-1': { // Template 1 theme 1
          primary: '#1e3a8a', // Blue primary
          secondary: '#facc15', // Yellow secondary
          accent: '#1f2937', // Dark Gray
          neutral: '#374151', // Gray-700
          'base-100': '#f9fafb', // Light Background
          'base-content': '#1f2937', // Dark Text
          info: '#60a5fa', // Info Blue
          success: '#22c55e', // Green
          text_1: '#f59e0b', // Orange
          text_2: '#ef4444', // Red
        },
        '1theme-2': {   // template 1 theme 2
          primary: '#9333ea', // Purple primary
          secondary: '#ec4899', // Pink secondary
          accent: '#0f172a', // Navy Blue
          neutral: '#1e293b', // Dark Gray
          'base-100': '#1e293b', // Dark Background
          'base-content': '#f3f4f6', // Light Text
          info: '#8b5cf6', // Light Purple
          success: '#10b981', // Green
          text_1: '#f59e0b', // Yellow
          text_2: '#ef4444', // Red
        },

        // Template 2
        '2theme-1': {  // template 2 theme 1
          primary: '#1e3a8a', // Blue primary
          secondary: '#facc15', // Yellow secondary
          accent: '#1f2937', // Dark Gray
          neutral: '#374151', // Gray-700
          'base-100': '#f9fafb', // Light Background
          'base-content': '#1f2937', // Dark Text
          info: '#60a5fa', // Info Blue
          success: '#22c55e', // Green
          text_1: '#f59e0b', // Orange
          text_2: '#ef4444', // Red
        },
        '2theme-2': {   // template 2 theme 2
          primary: '#9333ea', // Purple primary
          secondary: '#ec4899', // Pink secondary
          accent: '#0f172a', // Navy Blue
          neutral: '#1e293b', // Dark Gray
          'base-100': '#1e293b', // Dark Background
          'base-content': '#f3f4f6', // Light Text
          info: '#8b5cf6', // Light Purple
          success: '#10b981', // Green
          warning: '#f59e0b', // Yellow
          text_2: '#ef4444', // Red
        },

        // template 3 
        '3theme-1': {      // template 3 theme 1
          primary: '#1e3a8a', // Blue primary
          secondary: '#facc15', // Yellow secondary
          accent: '#1f2937', // Dark Gray
          neutral: '#374151', // Gray-700
          'base-100': '#f9fafb', // Light Background
          'base-content': '#1f2937', // Dark Text
          info: '#60a5fa', // Info Blue
          success: '#22c55e', // Green
          text_1: '#f59e0b', // Orange
          text_2: '#ef4444', // Red
        },
        '3theme-2': {    // template 3 team 2
          primary: '#9333ea', // Purple primary
          secondary: '#ec4899', // Pink secondary
          accent: '#0f172a', // Navy Blue
          neutral: '#1e293b', // Dark Gray
          'base-100': '#1e293b', // Dark Background
          'base-content': '#f3f4f6', // Light Text
          info: '#8b5cf6', // Light Purple
          success: '#10b981', // Green
          text_1: '#f59e0b', // Yellow
          error: '#ef4444', // Red
        },
   
      },
    ],
  },
};
