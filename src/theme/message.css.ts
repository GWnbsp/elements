import { oryTheme } from './theme.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const messageStyle = recipe({
  base: {
    color: oryTheme.foreground.default
  },
  variants: {
    severity: {
      error: {
        color: oryTheme.error.emphasis
      },
      success: {
        color: oryTheme.success.emphasis
      },
      disabled: {
        color: oryTheme.foreground.disabled
      }
    }
  }
});

export type MessageVariants = RecipeVariants<typeof messageStyle>;