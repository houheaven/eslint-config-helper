
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/prefer-enum-initializers */

enum Fruit {
  Apple,
}

declare let fruit: Fruit;

fruit === Fruit.Apple;
fruit === 0; // bad - comparison between enum and explicit value instead of named enum member


enum Vegetable {
  Asparagus = "asparagus",
}

declare let vegetable: Vegetable;

vegetable === Vegetable.Asparagus;
vegetable === "asparagus"; // bad - comparison between enum and explicit value instead of named enum member


declare let anyString: string;
// bad - comparison between enum and non-enum value
anyString === Vegetable.Asparagus;
