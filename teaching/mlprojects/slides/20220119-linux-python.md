---
layout: slides_finch
title: IFT 3710/6759 - Linux and Python for ML
---

name: title
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

### .gray224[Linux and Python for ML: introduction and demonstration]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]
<br><br>
Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alejandro.hernandez.garcia@umontreal.ca](mailto:alex.hernandez-garcia@mila.quebec) | [@alexhdezgcia](https://twitter.com/alexhdezgcia)] [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)

???

- The class is going to be a mix of lecture and hands-on

---

## Format of the class and objective

This class will combine an introduction to core Linux commands and tools and basic Python for machine learning, with a live demonstration.

The .highlight1[goal] is that at the end of the class:

* You are able to use the command line for basic operations.
* You know some useful Linux commands and tools and how to learn more.
* You remember the core aspects of Python.
* You know how to write a Python script to train a machine learning model.

???

If I do something that you do not understand, please let me know and we will talk about it.

---

## What is Linux?

[Linux](https://en.wikipedia.org/wiki/Linux) is a family of **open-source** operating systems based on the _Linux kernel_, an operating system kernel first released in 1991, evolved from the propietary Unix.

There exist multiple Linux _distributions_, such as Ubuntu, Debian and Fedora, each with specific characteristics but all based on the same kernel and provided by the [GNU Project](https://en.wikipedia.org/wiki/GNU_Project). 

--

### Why would you care?

* Most computing clusters typically run GNU/Linux distributions.
* Linux is open-source.
* Linux is free.
* Linux gives you access to powerful low-level toolsa.
* Now even Windows (and macOS) run Linux shell.

---

## The Shell

The Shell is a textual interface that allows you to run programs at a low level, that is taking full advantage of the tools in a computer.

The Shell is used via a **terminal**, which is installed by default in nearly all operating systems, and is a fundamental tool in Linux systemso

--

When we launch the .highlight1[terminal] we see a shell .highlight1[prompt] that looks something like:

``` bash
alex:~$
```

or 

``` bash
alex ~: 
```

`~` is short form the _home_ directory; `$` indicates no root (admin) access.

---

count: false

## The Shell

The shell runs programs or commands. Here are some of the most frequently used commands:

.left-column[
* `man`: manual
* `pwd`: print working dir
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
* `head`: view begginning of file
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
]

???

* Demonstrate tmux

---

## `vim`: command-line editor

.context[Not a must-learn, but highly recommended]

Without getting yet another time into an [_Editor war_](https://en.wikipedia.org/wiki/Editor_war), most programmers would agree that:

* It is worth learning at least one command-line text editor:
    * To edit files without leaving the terminal, even if only occasionally.
    * To edit files within a computing cluster.
* `vim` is extremely powerful ([Emacs](https://en.wikipedia.org/wiki/Emacs) is powerful too)
* `vim` is the [most popular](https://insights.stackoverflow.com/survey/2019/#development-environments-and-tools) command-line editor

Furthermore, with enough practice, `vim` can become your _main editor_.

However, `vim` takes time to learn.

.references[
* [My configuration file](https://github.com/alexhernandezgarcia/linux-config-utils/tree/master/vim)
* [The missing semester - Editors](https://missing.csail.mit.edu/2020/editors/)
]

---

## `vim`: command-line editor

.context[`vim` takes time to learn, let's not lie.]

.highlight1[Philosophy of Vim]:

* Designed to work without the mouse, not even the arrow keys.
* Vim is highly programmable.
* Vim works with composable commands
* Modal editting:
    * Normal: for moving around a file and making edits
    * Insert: for inserting text
    * Replace: for replacing text
    * Visual (plain, line, or block): for selecting blocks of text
    * Command-line: for running a command

.references[
* [My configuration file](https://github.com/alexhernandezgarcia/linux-config-utils/tree/master/vim)
* [The missing semester - Editors](https://missing.csail.mit.edu/2020/editors/)
]

---

class: tighter

## `vim`: command-line editor
### The very basics

.context[`vim` takes time to learn, let's not lie.]

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
* [Vim tetris, by Jeremy Pinto](https://www.jerpint.io/blog/tetris/)
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

.references[
Note: this should be familiar to those who took IFT 3395-6390 in the Fall 2021.
]

???

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

[`virtualenv`](https://virtualenv.pypa.io/en/stable/) is a tool to create Python environments. This is the basic usage:

``` bash
$ virtualenv -p python3 extremeweather
$ source extremeweather/bin/activate
$ python -m pip install numpy pandas
$ python -m pip freeze
$ deactivate
```

.references[
* You may also use [`conda`](https://anaconda.org/anaconda/python)
* There exist virtualenv wrappers: [`virtualenvwrapper`](https://pypi.org/project/virtualenvwrapper/), [`pipenv`](https://pypi.org/project/pipenv/), [`poetry`](https://pypi.org/project/poetry/)...
* [`virtualenv` docs](https://virtualenv.pypa.io/en/stable/index.html), with description, user guides, etc.
]

---

name: title
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

### .gray224[Linux and Python for ML: introduction and demonstration]

.bigger[.bigger[.highlight1[Break: 10 minutes]]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alejandro.hernandez.garcia@umontreal.ca](mailto:alex.hernandez-garcia@mila.quebec) | [@alexhdezgcia](https://twitter.com/alexhdezgcia)] [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)

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

Mention that since Pythonb 3.7, it is possible to simply do `breakpoint()`

---

## TODO

* bashrc
* aliases: https://missing.csail.mit.edu/2020/command-line/#aliases
* rsync
* argparse
* Linting
* Sign up cluster

---

name: title
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

### .gray224[Linux and Python for ML: introduction and demonstration]

.bigger[.bigger[.highlight1[Questions, doubts, concerns, comments?]]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alejandro.hernandez.garcia@umontreal.ca](mailto:alex.hernandez-garcia@mila.quebec) | [@alexhdezgcia](https://twitter.com/alexhdezgcia)] [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)

