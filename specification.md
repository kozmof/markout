# [Draft] Markout Specification 0.4.0
Last revision: 2025-05-12

## Table of Contents
- [0. Principle](#0-Principle)
- [1. Table](#1-Table)
- [2. Annotations](#2-Annotations)
- [3. Timeline](#3-Timeline)
- [4. Card](#4-Card)
- [5. Footnote](#5-Footnote)
---

## Writing Rule
```
<text> : text
PATH : path
true : boolean true
false : boolean false
<unsigned_number> : 0, 1, 2, 3, 4, 5...
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
: header_name_a
: header_name_b
: header_name_c
=
: content_a_1
: content_b_1
: content_c_1
-
: content_a_2
: content_b_2
: content_c_2
-
```

### implementation
- TypeScript: https://github.com/kozmof/markout/blob/master/implementations/ts/tableParser.ts


## 2. Annotations
Annotations are **not** rendered. They are used as meta data.

### Syntax
```
!<text> <text>
```
### Example
```
!draft start
### Example
this is a draft section.

!draft end
```
```
!rev 2025-05-12
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
]]
```
## 5. Footnote 
### Syntax
```
(<text>)[<unsigned_number>]
[<unsinged_number>] <text>
```
### Example
```
(foo)[1]
[1] foo has no meaning
```
