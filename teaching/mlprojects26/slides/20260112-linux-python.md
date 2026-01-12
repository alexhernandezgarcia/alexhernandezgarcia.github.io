---
layout: slides_warbler
title: IFT 3710/6759 - Linux et Python pour l'apprentissage automatique
---

name: 20260112-linux-python
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

#### .gray224[12 janvier 2026 - Session 2]
### .gray224[Linux et Python pour l'apprentissage automatique]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/teaching/mlprojects26/slides/{{ name }}](https://alexhernandezgarcia.github.io/teaching/mlprojects26/slides/{{ name }})
]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alejandro.hernandez.garcia@umontreal.ca](mailto:alejandro.hernandez.garcia@umontreal.ca)] | [alexhergar.bsky.social](https://bsky.app/profile/alexhergar.bsky.social) [![:scale 1em](../../../assets/images/slides/misc/bluesky.png)](https://bsky.app/profile/alexhergar.bsky.social)<br>

???

- The class is going to be a mix of lecture and hands-on

---

## Format de la séance et objectifs                                                                                                                                                                                                                                                                                                                                                             
Ce cours combinera une introduction aux commandes et outils Linux de base et à Python pour l’apprentissage automatique, avec une démonstration en direct.

L'.highlight1[objectif] est qu’à la fin du cours : 
* Vous pouvez utiliser la ligne de commande pour les opérations de base.
* Vous connaissez quelques commandes et outils de Linux et comment en apprendre plus.
* Vous vous souvenez des aspects fondamentaux de Python et connaissez les outils pratiques pour faciliter le processus de développement.
* Vous savez écrire un script Python pour entraîner un modèle d’apprentissage automatique.
                                                                                                                                                                                                                   
--

Quelques consignes pour toute la classe : 
* Si je fais quelque chose que vous ne comprenez pas et que vous voulez comprendre, n'hésitez pas à me le faire savoir !
* Si vous avez une approche différente, n'hésitez pas à la partager !
* Si vous connaissez des astuces et conseils supplémentaires, faites-le nous savoir !

???

- There is a second part!
- Invite folks to ask questions.
- Command line: ligne de commande
- Shell: interface système

---

## What is Linux?

[Linux](https://en.wikipedia.org/wiki/Linux) is a family of **open-source** operating systems based on the _Linux kernel_, an operating system kernel first released in 1991, evolved from the proprietary Unix.

There exist multiple Linux _distributions_, such as Ubuntu, Debian and Fedora, each with specific characteristics but all based on the same kernel and provided by the [GNU Project](https://en.wikipedia.org/wiki/GNU_Project). 

--

### Why would you care?

* Most computing clusters run GNU/Linux distributions.
* Linux is open-source.
* Linux is free.
* Linux gives you access to powerful low-level tools.
* Now even Windows (and macOS) run Linux shell.

???

- Système d'exploitation
- powerful low-level tools: outils de bas niveu très puissants.

---

## The Shell

The Shell is a textual interface that allows you to run programs at a low level, that is taking full advantage of the tools in a computer.

The Shell is used via a .h1[terminal], which is installed by default in nearly all operating systems, and is a fundamental tool in Linux systems.

--

When we launch the .highlight1[terminal] we see a shell .highlight1[prompt] that looks something like:

``` bash
username@machine:~$
```

`~` is short form the _home_ directory; `$` indicates no root (admin) access.

---

count: false

## The Shell

The shell runs programs or commands. Here are some of the most frequently used commands:

.left-column[
* `man`: manual (also: `info`)
* `pwd`: print working _dir_
* `ls`: list files
* `cd`: change directory
* `mkdir`: make directory
* `rmdir`: remove directory
* `cp`: copy
* `mv`: move (rename)
* `rm`: remove
]
.right-column[
* `echo`: display text
* `cat`: concatenate (view files)
* `less`: view file
* `head`: view beginning of file
* `tail`: view end of file
* `grep`: regular expressions
* `rsync`: advanced copying
* `chmod`: change permission
* `find`: search
]

.references[
* [Linux introduction](https://docs.computecanada.ca/wiki/Linux_introduction) for Windows and Mac users - Compute Canada wiki
* [The missing semester - The Shell](https://missing.csail.mit.edu/2020/course-shell/)
]

???

* Demonstrate these commands in command line

---

## `tmux`: terminal multiplexer

.context[Not a must-learn, but highly recommended]

`tmux` is probably the most popular multiplexer and it offers two main useful features:

* Split the terminal window into multiple terminal instances
* Handle sessions that can be attached or detached without stopping the programs

Furthermore, `tmux` is highly customisable to fit your needs.

However: 

* The default keys are pretty weird.
* It may take you some time to get used to it.

.references[
* [My configuration file](https://github.com/alexhernandezgarcia/linux-config-utils/tree/master/tmux)
* [The missing semester - Terminal Multiplexers](https://missing.csail.mit.edu/2020/command-line/#terminal-multiplexers)
* [A Quick and Easy Guide to tmux, Ham Vocke](https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/)
* [A gentle introduction to tmux](https://hackernoon.com/a-gentle-introduction-to-tmux-8d784c404340)
]

???

* Demonstrate tmux

---

## Vim: command-line editor

.context[Not a must-learn, but highly recommended]

Without getting yet another time into an [_Editor war_](https://en.wikipedia.org/wiki/Editor_war), most programmers would agree that:

* It is worth learning at least one command-line text editor:
    * To edit files without leaving the terminal, even if only occasionally.
    * To edit files within a computing cluster.
* Vim is extremely powerful ([Emacs](https://en.wikipedia.org/wiki/Emacs) is powerful too)
* Vim is the [most popular](https://survey.stackoverflow.co/2025/technology#most-popular-technologies-dev-envs) command-line editor

Furthermore, with enough practice, Vim can become your _main editor_ (~25 % of the repondents of [Stack Overflow's tech survey](https://survey.stackoverflow.co/2025/technology#most-popular-technologies-dev-envs) use Vim as dev IDE).

However, Vim takes time to learn.

.references[
* [My configuration file](https://github.com/alexhernandezgarcia/linux-config-utils/tree/master/vim)
* [The missing semester - Editors](https://missing.csail.mit.edu/2020/editors/)
* [On Vim vs NeoVim](https://itsfoss.gitlab.io/post/whats-the-difference-between-vim-and-neovim/)
]

---

## Vim: command-line editor

.context[Vim takes time to learn, let's not lie.]

.highlight1[Philosophy of [Vim](https://www.vim.org/)]:

* Designed to work without the mouse, not even the arrow keys.
* Vim is highly programmable.
* Vim works with _composable_ commands
* Modal editing:
    * Normal: for moving around a file and making edits
    * Insert: for inserting text
    * Replace: for replacing text
    * Visual (plain, line, or block): for selecting blocks of text
    * Command-line: for running a command

.references[
* [My configuration file](https://github.com/alexhernandezgarcia/linux-config-utils/tree/master/vim)
* [The missing semester - Editors](https://missing.csail.mit.edu/2020/editors/)
]

???

- Il vaut la peine d'apprendre à utiliser au moins un éditeur de ligne de commande.
- Arrow keys: touches flechées.

---

class: tighter

## Vim: command-line editor
### The very basics

.context[Vim takes time to learn, let's not lie.]

.left-column[
Command-line mode:
* `:q`: quit
* `:w`: write (save)
* `:e`: edit
* `:b`: buffer

Insert mode: `i`

Visual mode: `v`, `V`, `Ctrl-V`
]
.right-column[
Normal mode: `Ctrl-C` / `Esc`
* `hjkl`: left, down, up, right
* `w`: next word
* `b`: beginning of word
* `e`: end of word
* `0`: beginning of line
* `$`: end of line
* `y`: yank (copy)
* `p`: paste
* `u`: undo
* `Ctrl-R`: redo
* `d`: delete
]

.references[
* [Vim adventures](https://vim-adventures.com/)
* [Vim tetris, by Jeremy Pinto](https://www.jerpint.io/blog/2021-17-06-tetris/)
* Just enter `vimtutor` in your terminal!
]

---

## Demonstration
### A machine learning toy project on the command line

#### .highlight[Data set and task]:
A subset of [ClimateNet](https://portal.nersc.gov/project/ClimateNet/climatenet_new/), about detection of extreme weather events from atmospherical data. The goal is to automatically classify a set of 16 climate variables (pressure, temperature, humidity, etc.) corresponding to a time point and location, latitude and longitude, into one of three classes:

* Standard background conditions
* Tropical cyclone
* Atmospheric river

#### Basic repository with the data:

[`https://github.com/alexhernandezgarcia/ift-3710-6759-extremeweather`](https://github.com/alexhernandezgarcia/ift-3710-6759-extremeweather)

???

* Note: this should be familiar to those who took IFT 3395-6390 in the Fall 2021.
* Clone the repository
* Show tmux: panes, windows (code and data)
* Show vim: explore the data
* Activate CSV rainbow: `set: ft=csv`

---

## Python virtual environments

Virtual environments encapsulate a Python version and a set of packages. This is useful for several reasons:

* To avoid polluting global namespace.
* To prevent conflicts of libraries dependencies across projects.
* For better reproducibility.

--

The [`venv`](https://docs.python.org/3/library/venv.html) is a tool to create lightweight Python environments. This is the basic usage:

``` bash
$ python -m venv extremeweather
$ source extremeweather/bin/activate
$ python -m pip install numpy pandas
$ python -m pip freeze
$ deactivate
```

.references[
* You may also use [`virtualenv`](https://virtualenv.pypa.io/en/stable/) or [`conda`](https://anaconda.org/anaconda/python), but conda can be problematic.
* There exist Python environment wrappers: [`virtualenvwrapper`](https://pypi.org/project/virtualenvwrapper/), [`pipenv`](https://pypi.org/project/pipenv/), [`poetry`](https://pypi.org/project/poetry/)...
]

---

name: title
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

#### .gray224[11 janvier 2026 - Session 2]
### .gray224[Linux et Python pour l'apprentissage automatique]

.bigger[.bigger[.highlight1[Pause: 10 minutes]]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../../../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

---

class: tighter

## Python CLI debugging

Debugging Python in the command-line is enabled by [`pdb`, The Python Debugger](https://docs.python.org/3/library/pdb.html). [`ipdb`, IPython `pdb`](https://pypi.org/project/ipdb/) enables access to [`IPython`](http://ipython.org/).

--

To insert a breakpoint:

``` python
import pdb; pdb.set_trace()
```

Basic commands:

.left-column[
* `l`(list) 11 lines around the breakpoint
* `w`(here): show file and line number
* `n`(ext): execute current line
* `s`(tep): into function
]
.right-column[
* `r`(eturn): execute until return
* `c`(ontinue) until breakpoint
* `b #`: breakpoint at line #
* `cl`(ear) breakpoints
* `q`(uit)
]

.references[
[All debugger commands](https://docs.python.org/3/library/pdb.html#debugger-commands)
]

???

Mention that since Python 3.7, it is possible to simply do `breakpoint()`

---

## Python linting

Linters are tools that analyse or process our scripts to flag errors or compliance to standards. Some reasons to use linters are:

* They can save us a lot of precious time.
* They make our code nicer and readable for others. 

--

Some linters:

* [`flake8`](https://flake8.pycqa.org/en/latest/index.html) checks compliance with PEP8, unused imports, etc.
* [`isort`](https://pypi.org/project/isort/) sorts our imports.
* [`black`](https://pypi.org/project/black/) formats our code.

--

To get them all:

``` bash
$ python -m pip install flake8 isort black
```

---

## Miscellanea

* Customisation of the terminal:
    * [My configuration](https://github.com/alexhernandezgarcia/linux-config-utils/tree/master/bash)
    * [Terminal emulators, The missing semester](https://missing.csail.mit.edu/2020/command-line/#terminal-emulators)
* [Aliases, The missing semester](https://missing.csail.mit.edu/2020/command-line/#aliases)
* Pipes and redirections in Linux, [Ceos3c](https://www.ceos3c.com/open-source/pipes-and-redirection-in-linux-explained/)
* Monitoring tools: `top`, `htop`, `nvidia-smi`...
* [Shell scripting, The missing semester](https://missing.csail.mit.edu/2020/shell-tools/)
* [Python `fire`](https://google.github.io/python-fire/guide/): to turn any Python component into a command line interface.
* [Pytest](https://docs.pytest.org/en/6.2.x/contents.html): code testing
* [`mypy`](http://mypy-lang.org/): an optional static Python type checker
* [Python recommendations by Victor Schmidt](https://vsch.notion.site/Python-recommendations-957ee124321a41fdbaf258cc7dbbfdcb)

---

## Session suivante
### Git et Github

.context[Jeudi 15 janvier, 10h30-12h30]

Ressources et homework suggérées :

* [Getting Started - What is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F), Pro Git book.
* Create your account: [github.com/signup](https://github.com/signup)
* Install Git: [github.com/git-guides/install-git](https://github.com/git-guides/install-git)

---

name: title
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

#### .gray224[12 janvier 2026 - Session 2]
### .gray224[Linux et Python pour l'apprentissage automatique]

.bigger[.bigger[.highlight1[Questions, doubts, concerns, comments?]]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alejandro.hernandez.garcia@umontreal.ca](mailto:alejandro.hernandez.garcia@umontreal.ca)] | [alexhergar.bsky.social](https://bsky.app/profile/alexhergar.bsky.social) [![:scale 1em](../../../assets/images/slides/misc/bluesky.png)](https://bsky.app/profile/alexhergar.bsky.social)<br>

