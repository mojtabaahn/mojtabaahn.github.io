---
title: "Mocking SDKs in Python"
date: "2022-08-26"
link: "https://medium.com/@mojtabaa.hn/mocking-sdks-in-python-cc9044a47296"
---

Recently I was working on testing our microservices at [Basalam](https://basalam.com).
During testing stuff, there were challenges, but there was a specific testing challenge that was new to me.

In this article I'm going to talk about *Test Isolation* when writing unit & integration tests, so our test suites run fast and side effects decrease.