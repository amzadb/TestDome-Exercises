// Consider the following code:

const wishListReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(removeItem, (state, action) => {
            state.wishList = state.wishList.filter((item) => item != action.payload);
        })
        .addCase(addItem, (state, action) => {
            if (state.wishList.length < 10) {
                state.wishList.push(action.payload);
            }
        })
        .addDefaultCase((state, action) => {});
});

const store = configureStore({
    reducer: {
        cart: wishListReducer,
    },
});

// The initial wishlist:
const initialState = {
    wishList: [
        "Toy Car", 
        "Football"
    ],
};

// Considering the initialState and wishlistReducer above, 
// which of the following statements are true?

// A. The addItem action will have no effect on the state
//    if there are more than 11 items in wishList in the initialState.
// B. The addItem action will add an item to the state when the payload has 
//    a value that already exists in the state.
// C. The addItem action will be applied multiple times to the state
//    when the payload is an array.
// D. The removeItem reducer will be invoked when the removeItem action is dispatched
//    and the payload is undefined.
// E. The default case will be invoked when the state is empty and
//    the removeItem action is dispatched.
// F. The default case will be invoked after every invocation of
//    the addItem or removeItem reducer, regardless of any changes to the state.

// Answer: A, B, D