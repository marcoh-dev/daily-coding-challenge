# Daily Coding Challenge

Practice your coding skills, one challenge per day.

## Setup

Install the dependencies:

```bash
pnpm install
```

## Usage

To get a new challenge, run:

```bash
pnpm next
```

You can specify the difficulty or kyu level (8 is simple, 4 is hard - any could get you any kind of difficulty):

```bash
pnpm next easy
pnpm next {4,5,6,7,8}
pnpm next hard
pnpm next any
```

To get the solution for a given challenge, run:

```bash
pnpm solution {challenge-name}
pnpm solution alphabetical-addition
```

Challenges can't be picked twice, to reset the cache, run:

```bash
pnpm reset
```

Happy Hacking!
