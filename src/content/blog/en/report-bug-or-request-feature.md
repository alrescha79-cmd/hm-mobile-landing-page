---
slug: report-bug-or-request-feature
lang: en
title: How to Report a Bug or Request a Feature
description: The fastest way to fix a bug is to send a debug log straight from the app. Here is the full guide, plus the feedback form and GitHub as alternatives.
date: 2026-07-17
---

The fastest way to get a bug fixed is to show us what the app actually did, not just what you saw. The app can do that for you with a debug log. Here is the whole flow.

## Recommended: Send a Debug Log from the App

A debug log records every API call and every response while you reproduce the problem. Instead of describing the symptom, you hand us the evidence.

1. Open the app and go to **Settings**.
2. Scroll down and turn on **Debug Mode**.
3. Open the page where the problem happens and repeat the interaction that triggers it.
4. Go back to Settings and choose **Send debug log**. The app packages the log and opens your email app with everything ready to send.
5. Send it to the address shown, then turn **Debug Mode** back off.

That last step matters: debug mode is for diagnosis, not everyday use. Leaving it on adds overhead and keeps a growing log on your device.

This single step turns a vague "the connection is weird" into a fixable report. The root cause is usually obvious the moment we read the log.

## Alternative Ways to Reach Us

Prefer not to dig through settings? Both of these work:

**Feedback form**: visit [hm.cakson.my.id/#support](/en/#support), fill in the form, and send. No account needed.

**GitHub Issues**: open directly at [github.com/alrescha79-cmd/huawei-manager-mobile/issues](https://github.com/alrescha79-cmd/huawei-manager-mobile/issues). This needs a free GitHub account, but you get notified on replies and can track the fix.

## A Good Bug Report Includes

Whatever route you choose, include these five things:

**1. Modem model and firmware version**: which Huawei modem, and the firmware shown in the modem's Web UI (usually System > Device Information).

**2. App version**: from Settings > About. It looks like `v1.1.70`.

**3. Steps to reproduce**: what did you do, step by step?

**4. Expected vs. actual**: what should have happened, and what actually happened?

**5. Evidence**: the debug log (ideal), a HAR export, or a screenshot. If you can capture the problem on video, even better.

## Feature Requests

Before opening a feature request:

- **Search existing issues first.** Someone may have asked for the same thing. React or comment instead of opening a duplicate.
- **Describe the problem, not just the solution.** "I need to see my daily data usage at a glance" beats "add a graph widget". The problem explains the use case; the solution is only one interpretation.

Good: "My connection drops every few hours and I have no way to know which band it is on."
Less useful: "Add a band indicator."

## One Issue per Topic

Keep each report focused. One issue means one bug or one feature request. A combined "here are three things wrong" report gets messy fast and is easy to lose track of.

## After You Submit

We read everything. Bug reports get triaged and labeled. Feature requests are discussed in the open, and comments with alternative approaches are welcome. A closed issue means fixed (with the release noted) or declined with a reason.

Thank you for helping make Huawei Manager better.