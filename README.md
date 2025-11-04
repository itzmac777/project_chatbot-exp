## Short Note
Main idea of this project of mine was to create such a chatbot using help of Puter that will be one of the popular chatbot like
Claude-4, GPT-5, Gemini etc. but without session limit. As i was using free version of them, i couldnt use them for long for study
purpose. I would mostly hit their session limit which means another CD of 2-3 hours. 

## Why it's abondonded
I worked it for like a day and while experimenting with session and history persistance i hit the wall of rate limit again. 
So if the api has rate limit per user, i have no reason to reinvent the wheel again. This deminishes my whole core idea.
I tried to bypass this issue using multiple token simultaniously(which i kept exposed on client side) to access the api (got success), but this seemed unethical.

## What i learned
- Chatbot's API is stateless for scalibility purpose
- We have to use compression techinques and summerization to save tokens
- Read the doc of Google about heart of LLM's (transformer design), got vague idea about how LLM works under the hood


Thanks for reading it ;)
