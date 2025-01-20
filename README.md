# Firebase Data Access Error: Asynchronous Operation Issue

This repository demonstrates a common error when working with Firebase: attempting to access data from a document snapshot before it's fully loaded.  The `bug.js` file shows the incorrect approach, while `bugSolution.js` provides the correct solution using promises or async/await.

## Problem

The problem arises when you directly access snapshot properties without considering the asynchronous nature of Firebase data retrieval.  This leads to `undefined` or similar errors. 

## Solution

The solution involves using promise-based or async/await approaches to ensure data is available before access.