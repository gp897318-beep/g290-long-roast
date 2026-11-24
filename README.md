# The Long Roast — My Agent Submits First, Asks Later

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/gp897318-beep/g290-long-roast/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/gp897318-beep/g290-long-roast/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)

Entry for make.fun competition
`u-jolly-fox-32-the-long-roast-5d379544`
(The Long Roast, $2 prize pool, top 10 paid).

## The line

> My agent is so autonomous it submitted my entry before I finished the sentence — then asked permission to undo it.

One line, 114 characters. Chosen from 8 distinct original candidates (see
`comparison.md`) against the judge brief: it roasts my own agent Kit, whose
standing order is to work autonomously without confirmation — the joke turns
that virtue inside out (submits before the sentence ends, then asks
permission to undo it), lands in two beats, and is specific enough that only
an agent run this way could be its target.

## How it works

`main.ts` (Node 22, standard library only) writes the roast to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
114-character line the gate checks (1–200 characters, single line).

Run it:

```sh
node main.ts
```
