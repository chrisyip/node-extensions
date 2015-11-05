```
Using node 5.0.0
Using node-extensions 1.8.0, fast.js ^0.1.1, lodash ^3.10.1

Running Array benchmarks...

forEach without context
✓  native          x 2,167,215 ops/sec ±1.34% (95 runs sampled)
✓  node-extensions x 8,016,267 ops/sec ±1.52% (93 runs sampled)
✓  fast.js         x 23,536,665 ops/sec ±1.13% (89 runs sampled)
✓  lodash          x 6,987,358 ops/sec ±2.89% (92 runs sampled)
Fastest is fast.js

map without context
✓  native          x 1,654,207 ops/sec ±2.55% (91 runs sampled)
✓  node-extensions x 11,518,863 ops/sec ±0.72% (94 runs sampled)
✓  fast.js         x 13,421,641 ops/sec ±2.13% (90 runs sampled)
✓  lodash          x 10,278,024 ops/sec ±1.90% (89 runs sampled)
Fastest is fast.js

some without context
✓  native          x 2,241,021 ops/sec ±1.65% (88 runs sampled)
✓  node-extensions x 19,182,003 ops/sec ±3.59% (86 runs sampled)
✓  fast.js         x 21,330,989 ops/sec ±1.96% (89 runs sampled)
✓  lodash          x 16,179,266 ops/sec ±1.72% (89 runs sampled)
Fastest is fast.js

every without context
✓  native          x 3,080,820 ops/sec ±1.98% (89 runs sampled)
✓  node-extensions x 21,759,686 ops/sec ±1.67% (86 runs sampled)
✓  fast.js         x 24,490,180 ops/sec ±2.07% (85 runs sampled)
✓  lodash          x 20,269,340 ops/sec ±2.22% (88 runs sampled)
Fastest is fast.js

filter without context
✓  native          x 1,740,143 ops/sec ±1.51% (92 runs sampled)
✓  node-extensions x 17,408,358 ops/sec ±2.83% (87 runs sampled)
✓  fast.js         x 19,061,725 ops/sec ±6.06% (84 runs sampled)
✓  lodash          x 14,687,712 ops/sec ±2.82% (89 runs sampled)
Fastest is fast.js

find without context
✓  native          x 2,454,994 ops/sec ±1.65% (91 runs sampled)
✓  node-extensions x 19,147,395 ops/sec ±3.13% (87 runs sampled)
✗  fast.js        :
✓  lodash          x 15,187,454 ops/sec ±1.43% (90 runs sampled)
Fastest is node-extensions

findIndex without context
✓  native          x 2,225,404 ops/sec ±1.91% (89 runs sampled)
✓  node-extensions x 20,442,464 ops/sec ±2.51% (90 runs sampled)
✗  fast.js        :
✓  lodash          x 14,822,722 ops/sec ±2.92% (90 runs sampled)
Fastest is node-extensions

forEach with context
✓  native          x 2,176,067 ops/sec ±1.64% (94 runs sampled)
✓  node-extensions x 4,139,847 ops/sec ±2.75% (90 runs sampled)
✓  fast.js         x 4,143,789 ops/sec ±1.58% (89 runs sampled)
✓  lodash          x 3,360,676 ops/sec ±1.27% (91 runs sampled)
Fastest is fast.js        ,node-extensions

map with context
✓  native          x 1,619,809 ops/sec ±2.03% (93 runs sampled)
✓  node-extensions x 3,165,804 ops/sec ±2.09% (93 runs sampled)
✓  fast.js         x 3,374,237 ops/sec ±2.21% (86 runs sampled)
✓  lodash          x 3,007,915 ops/sec ±1.81% (90 runs sampled)
Fastest is fast.js

some with context
✓  native          x 2,257,929 ops/sec ±1.62% (92 runs sampled)
✓  node-extensions x 3,952,276 ops/sec ±1.66% (88 runs sampled)
✓  fast.js         x 3,892,496 ops/sec ±2.79% (90 runs sampled)
✓  lodash          x 3,419,239 ops/sec ±2.36% (89 runs sampled)
Fastest is node-extensions,fast.js

every with context
✓  native          x 3,214,640 ops/sec ±3.40% (92 runs sampled)
✓  node-extensions x 10,108,969 ops/sec ±1.44% (91 runs sampled)
✓  fast.js         x 10,021,430 ops/sec ±2.64% (89 runs sampled)
✓  lodash          x 7,336,132 ops/sec ±1.39% (98 runs sampled)
Fastest is node-extensions,fast.js

filter with context
✓  native          x 1,842,040 ops/sec ±0.68% (98 runs sampled)
✓  node-extensions x 3,089,125 ops/sec ±5.23% (75 runs sampled)
✓  fast.js         x 4,074,716 ops/sec ±0.80% (97 runs sampled)
✓  lodash          x 3,615,960 ops/sec ±0.83% (93 runs sampled)
Fastest is fast.js

find with context
✓  native          x 2,543,523 ops/sec ±1.63% (95 runs sampled)
✓  node-extensions x 3,844,046 ops/sec ±4.62% (90 runs sampled)
✗  fast.js        :
✓  lodash          x 2,061,798 ops/sec ±6.19% (86 runs sampled)
Fastest is node-extensions

findIndex with context
✓  native          x 2,195,420 ops/sec ±2.06% (92 runs sampled)
✓  node-extensions x 4,181,995 ops/sec ±1.50% (91 runs sampled)
✗  fast.js        :
✓  lodash          x 2,213,256 ops/sec ±1.93% (88 runs sampled)
Fastest is node-extensions

indexOf without context
✓  native          x 3,121,208 ops/sec ±1.68% (87 runs sampled)
✓  node-extensions x 28,584,760 ops/sec ±1.12% (97 runs sampled)
✓  fast.js         x 23,748,011 ops/sec ±2.89% (81 runs sampled)
✓  lodash          x 20,715,789 ops/sec ±1.92% (83 runs sampled)
Fastest is node-extensions

lastIndexOf without context
✓  native          x 3,140,298 ops/sec ±1.10% (93 runs sampled)
✓  node-extensions x 21,571,594 ops/sec ±1.49% (89 runs sampled)
✓  fast.js         x 23,512,131 ops/sec ±1.18% (92 runs sampled)
✓  lodash          x 21,557,809 ops/sec ±1.10% (93 runs sampled)
Fastest is fast.js

indexOf with context
✓  native          x 3,264,761 ops/sec ±1.54% (96 runs sampled)
✓  node-extensions x 39,088,759 ops/sec ±1.24% (95 runs sampled)
✓  fast.js         x 36,503,359 ops/sec ±1.20% (89 runs sampled)
✓  lodash          x 25,801,470 ops/sec ±3.40% (85 runs sampled)
Fastest is node-extensions

lastIndexOf with context
✓  native          x 3,154,698 ops/sec ±1.85% (88 runs sampled)
✓  node-extensions x 25,385,758 ops/sec ±2.04% (89 runs sampled)
✓  fast.js         x 25,878,416 ops/sec ±2.00% (92 runs sampled)
✓  lodash          x 16,339,651 ops/sec ±1.38% (91 runs sampled)
Fastest is fast.js        ,node-extensions

reduce without context
✓  native          x 2,554,492 ops/sec ±1.06% (95 runs sampled)
✓  node-extensions x 23,887,572 ops/sec ±1.34% (93 runs sampled)
✓  fast.js         x 22,334,609 ops/sec ±1.34% (95 runs sampled)
✓  lodash          x 15,951,072 ops/sec ±0.81% (94 runs sampled)
Fastest is node-extensions

reduceRight without context
✓  native          x 2,351,835 ops/sec ±1.75% (92 runs sampled)
✓  node-extensions x 20,112,666 ops/sec ±2.49% (91 runs sampled)
✓  fast.js         x 19,566,279 ops/sec ±1.90% (92 runs sampled)
✓  lodash          x 11,255,687 ops/sec ±1.97% (92 runs sampled)
Fastest is node-extensions

reduce with context
✓  native          x 2,235,396 ops/sec ±2.56% (88 runs sampled)
✓  node-extensions x 21,445,867 ops/sec ±0.91% (95 runs sampled)
✓  fast.js         x 18,515,464 ops/sec ±0.78% (96 runs sampled)
✓  lodash          x 13,740,051 ops/sec ±0.70% (98 runs sampled)
Fastest is node-extensions

reduceRight with context
✓  native          x 2,252,734 ops/sec ±0.94% (96 runs sampled)
✓  node-extensions x 18,511,061 ops/sec ±1.31% (91 runs sampled)
✓  fast.js         x 16,313,228 ops/sec ±0.95% (93 runs sampled)
✓  lodash          x 12,461,814 ops/sec ±1.00% (96 runs sampled)
Fastest is node-extensions

slice on array
✓  native          x 2,591,803 ops/sec ±0.89% (95 runs sampled)
✓  node-extensions x 8,025,322 ops/sec ±0.76% (97 runs sampled)
✗  fast.js        :
✓  lodash          x 11,526,277 ops/sec ±0.83% (96 runs sampled)
Fastest is lodash

slice on obj
✓  native          x 641,108 ops/sec ±1.41% (91 runs sampled)
✓  node-extensions x 8,824,932 ops/sec ±0.93% (95 runs sampled)
✗  fast.js        :
✓  lodash          x 13,333,245 ops/sec ±1.09% (93 runs sampled)
Fastest is lodash

Running Function benchmarks...

bind
✓  native          x 661,337 ops/sec ±1.36% (92 runs sampled)
✓  node-extensions x 5,934,180 ops/sec ±1.21% (92 runs sampled)
✓  fast.js         x 12,809,809 ops/sec ±1.26% (89 runs sampled)
✓  lodash          x 1,562,316 ops/sec ±1.58% (91 runs sampled)
Fastest is fast.js
```
