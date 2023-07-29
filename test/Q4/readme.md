Promise chaining is a technique in JavaScript that allows you to chain multiple promises together. This can be useful when you need to perform multiple asynchronous operations in a row.

For example, let's say you want to fetch the title of a website and then the number of pages on that website. You could do this with promise chaining like this:

```javascript

const promise1 = fetch('https://www.example.com');

const promise2 = promise1.then(response => response.text());

const promise3 = promise2.then(text => text.split('\n').length);
​
// When promise3 resolves, it will contain the number of pages on the website.
```

In this example, we first create a promise `promise1` that will fetch the contents of the website `https://www.example.com`. Then, we use the `then()` method to chain a second promise `promise2` that will convert the response text to a string. Finally, we chain a third promise `promise3` that will count the number of lines in the string.

When all three promises resolve, the value of `promise3` will be the number of pages on the website.