import { render, screen } from "@testing-library/react";

import Son from ".";

// console.log('aaa');

// test("if son has a number", () => {
//   render(<Son />);
//   //   const sonText = screen.getByText('son');
//   const sonText = screen.getByTextId("son");
//   console.log(sonText);
  
//   expect(sonText).toBeInTheDocument();
// });



test("if input has been controlled", () => {
    render(<Son />);
    //   const sonText = screen.getByText('son');
    const sonInput = screen.getByRole('input');
    console.log(sonInput);
    
    expect(sonInput).toBe();
  });




