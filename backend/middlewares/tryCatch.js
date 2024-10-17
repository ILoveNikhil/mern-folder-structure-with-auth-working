
export const TryCatch = (passedFunc) => async (req, res, next) => {
    try {
      if (typeof passedFunc !== 'function') {
        throw new Error('TryCatch requires a function as its first argument');
      }
      await passedFunc(req, res, next);
    } catch (error) {
      // Optional: Add error logging here
    console.error(`Error occurred in ${passedFunc.name}:`, error);
      next(error);
    }
  };