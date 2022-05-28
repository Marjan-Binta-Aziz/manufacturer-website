import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className=" text-center text-accent text-4xl mb-2 uppercase">
blogs      </h2>
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center flex flex-col">
    <div class="max-w-md ">
      <h1 class="text-2xl font-bold">14.1 How will you improve the performance of a React Application?</h1>
      <p class="py-6">First Need Intarest to learn something. Then need a proper Routine. Then you will need Pracsise</p>
    </div>
    <div class="max-w-md">
      <h1 class="text-2xl font-bold">14.2 What are the different ways to manage a state in a React
              application?</h1>
      <p class="py-6">By using useState, Server State, pop drilling</p>
    </div>
    <div class="max-w-md">
      <h1 class="text-2xl font-bold">14.3 How does prototypical inheritance work?
              application?</h1>
      <p class="py-6">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
    </div>
    <div class="max-w-md">
      <h1 class="text-2xl font-bold"> 14.4 Why you do not set the state directly in React. For example,
              if you have const [products, setProducts] = useState([]). Why you
              do not set products = [...] instead, you use the setProducts
              application?</h1>
      <p class="py-6">When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.</p>
    </div>
    <div class="max-w-md">
      <h1 class="text-2xl font-bold">14.6 What is a unit test? Why should write unit tests?</h1>
      <p class="py-6">Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;