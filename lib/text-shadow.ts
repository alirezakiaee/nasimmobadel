import plugin from 'tailwindcss/plugin';

export const textShadow = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'text-shadow': (value) => ({
        textShadow: value,
      }),
    },
    { values: theme('textShadow') }
  );
});
