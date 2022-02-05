# SpamShun

## The Problem

I've been receiving a **ton** of spam emails recently, and it's gotten so bad to the point where I never bother to check my Spam email folder. However, one day, while I was waiting for a university interview email, I randomly decided to search for the university's name in my spam folder (which I hadn't touched for at least a month). Sure enough, I found an interview request email that had landed in the spam folder.

Luckily for me, the email was only a day old—the fact that I'd checked my spam folder that day and not a week later was **pure coincidence.** I'd almost missed my university interview because of spam emails, so naturally, I came up with a system that solves the spam email problem for good.

## The Solution

To understand how to stop spam emails, we first have to understand how spammers send emails. Blacklisting domains doesn't work, because many of these emails are sent from various domains and there's just too many to block. Obviously, whitelisting emails isalso not the best idea because it leaves you closed to opportunities from the outside world.

Spammers basically create a collection of emails and save it in some sort of email database, and they mass email everybody on this list. In other words, the process is largely automated. Spammers don't send emails one-by-one—there's just too many victims.

So, taking account of this fact, I thought: what if I could have an auto-reply that basically asks the sender to forward the email to another email? Since spammers use bots, the bot wouldn't be able to pick up this request and thus the spam email would never arrive in the inbox that I check. However, people who are contacting me for a genuine reason would receive the notice and be able to easily forward it to this new email.

However, there is still a chance that this "internal" email may get leaked and end up on a spammer's collection list. And if we use a Gmail account or a regular mail account, we can't change our email, so once it's leaked, it's leaked for good and the best solution at that point is to rely a spam filter, which, based on my experience with the university interview email, isn't the optimal way.

So, knowing that I'd need to be able to change my email should they ever become leaked, I bought a Google Workspace subscription so that I could link my domain [leonzalion.com](http://leonzalion.com) with an email address that would be easily modifiable. As for the strategy to block spam emails, Google Workspace has some powerful email routing filters that would help me implement this idea.

### The Different Types of Emails

Not all emails are created equal: you want to have a public email that is only open to genuine opportunities and not spammers, so those don't need a direct access to your inbox and you can use an auto-reply to give further instructions.

However, the emails you sign up for services must have direct access to your inbox, since requests like password resets and alerts are also automated.

Luckily, Google Workspace has some powerful features that allow you to basically implement different "types" of emails under your domain:

**Public Email:** The email that will always auto-reject the email with a message telling the user to forward it to a hidden public email.

**Hidden Public Email ([random 4 characters]@exmaple.com):** The email which is included in the rejection notice from the public email asking the sender to forward their email to this public email address. Because there is still potential for this email to get leaked (since it is publicly accessible), it uses a random 4 character combination since it might need to be changed.

**Private email ([name]@example.com):** This email rejects _all_ incoming emails whose sender isn't on a whitelist. I only give this email to close family and friends and whitelist their emails on a Address List in Google Workspace.

**Service emails ([random 5 characters]@example.com):** Emails that are used to register for services which need direct access to my inbox (e.g. password reset requests). For each service I register for, I use a _unique and unguessable email_ such that if one service ends up leaking my email from a data breach of some kind, I only need to update my email address for that service and my other service emails will not be affected.

You might be thinking, how would I memorize the email I use for each service? The answer: **I don't.** I use Bitwarden (a password manager) for managing my emails. Since I usually have to open Bitwarden anyways to copy-paste my password, it's not that hard to also check the 5-letter email as well.

One potential problem with this approach is that if you ever lose your access to your email, unless the service has some other way of recovering it (such as a username), then you'll end up losing access to the service. This is why I have my emails backed up in other places other than Bitwarden: I also have a list of the services and each email backed up using Git. However, this process is very tedious, since for each service I use, I have to generate a random email, update a file that contains all my emails, add this email to Google Workspace to whitelist it and then add it to Bitwarden.

As a programmer, I'd rather have these tasks automated each time I'd like to create a new account. That's where SpamShun comes in.

## How SpamShun (will) work

Since Google Workspace doesn't have a proper API for managing Routing requests, I'm planning to create an Electron app that will use an automation tool like Playwright to automatically generate, whitelist, and add new addresses when the user needs a new address for a new service.

For the sake of security, it can't be a website since I'd then need to store the user's Google Workspace password somewhere in the cloud in order to log in (since I can't use an API).

I have no idea if this is even possible, but it's worth a try :)

I'm hoping to create integrations with other email services that allow you to use a custom domain in the future.
 
