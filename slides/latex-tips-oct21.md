---
layout: slides_mila_stork
title: LaTeX tips
---

name: title
class: title, middle

# LaTeX tips

Alex Hernández-García (he/il/él)

.turquoise[Rolnick Lab · Montréal · Oct. 27th 2021]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 6em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec) | [@alexhdezgcia](https://twitter.com/alexhdezgcia)] [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)

---

## Citations
### `\citep{}` and `\citet{}`

[`natbib`](https://ctan.org/pkg/natbib) provides handy commands and great functionality for handling citations:

```
\usepackage{natbib}
```

`\citep{}` and `\citet{}` allow to correctly integrate citations within a sentence:

* `\citep{darwin1859origin}`: parenthetical citation (Darwin, 1859).
* `\citet{darwin1859origin}`: textual citation, as Darwin (1859).

--

_Pro tip_: you can tweak the details of citations, for example:
```
\RequirePackage{natbib}
\setcitestyle{authoryear,round,citesep={;},aysep={,},yysep={;}}
```

--

Further reading:
* [Overleaf documentation on `natbib`](https://www.overleaf.com/learn/latex/Bibliography_management_with_natbib)

---

## Citations
### Clean organisation of the `bib` entries

* I keep one `references.bib` for each research line that I use in all papers, reports, thesis, etc.
* I use comments to organise the `references.bib` file in sections per topics.
* It is a good practice to use a consistent style for the IDs. I use `firstauthorYEARtopic`. Google Scholar uses `firstauthorYEARfirstwordtitle`.
* It is a good practice to keep a consistent style for the entries:
    * Authors enumeration
    * Force case with double curly braces: `{Climate change and {AI}}` to  force uppercase AI.
    * Names of conferences

--

.conclusion[Do as you wish, but mostly be **consistent**]

---

## Cross-references

Different parts of a document can be identified with the command `\label{id}` and referenced elsewhere with `\ref{id}`

* I like to keep labels consistent and organised to avoid duplicates
* I use a different prefix for each type of content:
    * `\label{sec:results}`
    * `\label{fig:results-summary}`
    * `\label{tab:results-summary}`

---

## Cross-references
### `cleveref` for improved references

`cleveref` improves standard references with extra features, such as:

* The reference includes both _label_ and _number_ instead of just the number: 
    * `as shown in \cref{fig:results}`: "as shown in Figure 3"
* The label becomes part of the hyperlink
* Smarter handling of multiple labels:
    * `see \cref{eq:th1,eq:th2,fig:results-summary}`: "see Eqs. (1) and (2) and Figure 3"
* Even ranges:
    * `see \crefrange{eq:1}{eq:4}`: "see Eqs. (1) to (4)"

Further reading:
* [Documentation on CTAN](https://ctan.org/pkg/cleveref%EF%BC%89%E3%80%82)
* [texblog.org](https://texblog.org/2013/05/06/cleveref-a-clever-way-to-reference-in-latex/)

---

## Colours

LaTeX's default colours are bad for you and your readers, but that's easy to fix:

* `\hypersetup{citecolor=MidnightBlue}`: to set the colour of hyperlinks with `hyperref`
* Define colours and set defaults with `xcolor`:

```
\usepackage{xcolor}
\definecolor{highlightblue}{rgb}{0.435,0.659,0.863}
\hypersetup{citecolor=highlightblue}
```

Using colours is a great idea for highlighting text during paper writing, for example different authors may have different colours, etc.

---

## Miscellaneous

* Do not forget to punctuate equations!
* [`\usepackage{blindtext}`](https://www.ctan.org/pkg/blindtext) allows to easily generate dummy _Lorep ipsum_ content, with `\blinddocument`, `\blind{itemize}[3]`, `\blindmathpaper`, etc.
* `\usepackage{comment}` allows to easily comment out blocks of content with `\begin{comment}` and `\end{comment}`.
* Make a good use of `h`, `t`, `b` `!`, etc. to position figures and tables [(to read more)](https://www.overleaf.com/learn/latex/Positioning_images_and_tables)
* Markdown and LaTeX are a [happy marriage](https://ashki23.github.io/markdown-latex.html)!
* There is of course a lot more to learn about LaTeX:
    * The [Overleaf documentation](https://www.overleaf.com/learn) is great.
    * I took inspiration from [this tweet by Dustin Tran](https://twitter.com/dustinvtran/status/1398133621328781313)
    * [Writing beautifully in LaTeX](https://www.gleave.me/post/latex-design-patterns/)

---

## LaTeX for big documents
### Theses, reports, long papers, etc.

One of the main advantages of LaTeX is that we can easily separate style and content. Keeping this philosophy in mind while writing LaTeX documents will save us time and help us focus. Usually we have `style.sty` files for specifying all style and format details, and `content.tex` files to include our content.

Having content as plain text enables version control, handling lightweight files and makes collaboration and sharing easy.

For long documents these features become particularly important. I took good advantage of them for my PhD thesis, which is [available on GitHub](https://github.com/alexhernandezgarcia/phd-thesis-latex).
