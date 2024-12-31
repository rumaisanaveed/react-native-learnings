// we can define a specific layout here to share across multiple components present in this directory
// it can have multiple children nested inside it

// it's just like the children as we've in react js
import { Slot } from "expo-router";

export default function CoffeeLayout() {
  return <Slot />;
}
