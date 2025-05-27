# [Draft] Markout Specification 0.8.0
Last revision: 2025-05-27

## Table of Contents
- [0. Principle](#0-Principle)
- [1. Table](#1-Table)
- [2. Annotations](#2-Annotations)
- [3. Timeline](#3-Timeline)
- [4. Card](#4-Card)
- [5. Footnote](#5-Footnote)
- [6. Label](#6-Label)
- [7. Marker](#7-Marker)
- [8. JSON Metadata](#8-JSON-Metadata)
- [9. Link](#9-Link)
- [10. Line Breaks](#10-Line-Breaks)
- [11. New Paragraphs](#11-New-Paragraphs)

---

## Writing Rule
```
<text> : text
<unsigned_number> : 0, 1, 2, 3, 4, 5...
<color_name>: color name
{ JSON }: JSON
... : repeat
```
---

## 0. Principle
- File extension: .mo
- Practical useability
- Semi structured data
- Simply parsable
- Easily detect syntax errors


## 1. Table
### Syntax
```
=
: <text>
...
=
: <text>
...
-
...
```
### Example
```
=
: fruits
: grams
: amount
=
: apple
: 170
: 40
-
: orange
: 140
: 20
-
: cherry 
: 10
: 50
-

```

### implementation
- TypeScript: https://github.com/kozmof/markout/blob/master/implementations/ts/tableParser.ts


## 2. Annotations
Annotations are **not** rendered. They are used as metadata.

### Syntax
```
|> <text>
```
### Example
```
|> draft start
### Example
this is a draft section.

|> draft end
```
```
|> rev 2025-05-12
### Example
this is a draft section.
```

## 3. Timeline
### Syntax 1
```
- [YYYY-mm-dd H:M:S] <text>
```

### Syntax 2
```
- [YYYY-mm-dd] <text>
```

### Syntax 3
```
- [H:M:S] <text>
```

## 4. Card
### Syntax
```
[[
<text>
]...]
```
```
[[
  ## Document
  See this link: ...
][
  ## Q&A
  See this link: ...
]]
```
## 5. Footnote 
### Syntax
```
(<text>)[^<unsigned_number>]
[^<unsinged_number>] <text>
```
### Example
```
(foo)[^1]
[^1] foo has no meaning
```

## 6. Label
### Syntax
```
- [#<text>]... <text>
```

### Example
```
- [#TODO][#UI] create a side panel
```

## 7. Marker
### Syntax
```
{#<color_name> <text>}
```
### Example
```
This is a normal text with a {#notice highlighted section}.
```

## 8. JSON Metadata
JSON Metadata is **not** rendered.\
JSON Metadata must be placed either at the beginning or the end of the file.
### Syntax
```
__{ JSON }__
```
### Example
```
__{
  "color-name": {
    "notice": "#ffeb87"
  }
}__
```

## 9. Link
### Syntax
```
<#<text>|<link>>
```
### Example
```
<#GitHub|https://github.com>
```

## 10. Line Breaks
### Syntax
```
\n
```

### Example
```
Paragraph 1_a
|> this is the same paragraph
Paragraph 1_b
```

## 11. New Paragraphs
### Syntax
```
\n\n
```

### Example
```
Paragraph 1

|> this is a new paragraph
Paragraph 2
```
