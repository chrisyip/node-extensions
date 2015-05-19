```
Using node 2.0.2
Using node-extensions 1.4.2, fast.js ^0.1.1, lodash ^3.8.0

Running Array benchmarks...

forEach without context
✓  native          x 2,124,940 ops/sec ±1.19% (93 runs sampled)
✓  node-extensions x 7,485,338 ops/sec ±1.26% (91 runs sampled)
✓  fast.js         x 24,904,945 ops/sec ±0.75% (98 runs sampled)
✓  lodash          x 7,539,179 ops/sec ±0.94% (96 runs sampled)
Fastest is fast.js

map without context
✓  native          x 1,750,922 ops/sec ±1.26% (95 runs sampled)
✓  node-extensions x 13,042,588 ops/sec ±0.86% (94 runs sampled)
✓  fast.js         x 17,150,047 ops/sec ±1.27% (91 runs sampled)
✓  lodash          x 11,306,694 ops/sec ±0.97% (92 runs sampled)
Fastest is fast.js

some without context
✓  native          x 2,277,293 ops/sec ±0.80% (95 runs sampled)
✓  node-extensions x 20,470,334 ops/sec ±1.06% (94 runs sampled)
✓  fast.js         x 23,604,434 ops/sec ±1.05% (93 runs sampled)
✓  lodash          x 16,831,177 ops/sec ±0.80% (94 runs sampled)
Fastest is fast.js

every without context
✓  native          x 3,320,883 ops/sec ±0.92% (94 runs sampled)
✓  node-extensions x 21,464,751 ops/sec ±0.93% (94 runs sampled)
✓  fast.js         x 31,361,806 ops/sec ±1.52% (88 runs sampled)
✓  lodash          x 22,166,655 ops/sec ±1.26% (90 runs sampled)
Fastest is fast.js

filter without context
✓  native          x 1,746,745 ops/sec ±1.12% (93 runs sampled)
✓  node-extensions x 20,011,953 ops/sec ±1.10% (91 runs sampled)
✓  fast.js         x 22,697,256 ops/sec ±0.94% (93 runs sampled)
✓  lodash          x 15,456,732 ops/sec ±0.62% (96 runs sampled)
Fastest is fast.js

find without context
✗  native         :
✓  node-extensions x 20,090,644 ops/sec ±1.10% (92 runs sampled)
✗  fast.js        :
✓  lodash          x 14,870,034 ops/sec ±0.82% (96 runs sampled)
Fastest is node-extensions

findIndex without context
✗  native         :
✓  node-extensions x 20,403,265 ops/sec ±1.34% (89 runs sampled)
✗  fast.js        :
✓  lodash          x 15,370,997 ops/sec ±0.98% (91 runs sampled)
Fastest is node-extensions

forEach with context
✓  native          x 2,284,078 ops/sec ±1.05% (94 runs sampled)
✓  node-extensions x 4,287,521 ops/sec ±1.18% (90 runs sampled)
✓  fast.js         x 4,470,429 ops/sec ±0.97% (95 runs sampled)
✓  lodash          x 3,450,702 ops/sec ±0.93% (93 runs sampled)
Fastest is fast.js

map with context
✓  native          x 1,786,774 ops/sec ±0.98% (92 runs sampled)
✓  node-extensions x 3,585,996 ops/sec ±0.97% (93 runs sampled)
✓  fast.js         x 3,708,960 ops/sec ±0.79% (95 runs sampled)
✓  lodash          x 3,233,068 ops/sec ±1.12% (92 runs sampled)
Fastest is fast.js

some with context
✓  native          x 2,387,801 ops/sec ±0.94% (96 runs sampled)
✓  node-extensions x 4,088,119 ops/sec ±1.12% (94 runs sampled)
✓  fast.js         x 3,676,044 ops/sec ±4.05% (84 runs sampled)
✓  lodash          x 3,405,245 ops/sec ±1.08% (93 runs sampled)
Fastest is node-extensions,fast.js

every with context
✓  native          x 3,592,218 ops/sec ±0.88% (93 runs sampled)
✓  node-extensions x 4,337,511 ops/sec ±1.12% (92 runs sampled)
✓  fast.js         x 12,951,466 ops/sec ±1.38% (90 runs sampled)
✓  lodash          x 6,807,674 ops/sec ±1.33% (90 runs sampled)
Fastest is fast.js

filter with context
✓  native          x 1,793,723 ops/sec ±1.03% (96 runs sampled)
✓  node-extensions x 4,105,388 ops/sec ±0.92% (93 runs sampled)
✓  fast.js         x 2,714,055 ops/sec ±1.01% (92 runs sampled)
✓  lodash          x 3,609,788 ops/sec ±0.75% (95 runs sampled)
Fastest is node-extensions

find with context
✗  native         :
✓  node-extensions x 4,145,900 ops/sec ±0.88% (94 runs sampled)
✗  fast.js        :
✓  lodash          x 3,773,091 ops/sec ±0.78% (94 runs sampled)
Fastest is node-extensions

findIndex with context
✗  native         :
✓  node-extensions x 4,245,094 ops/sec ±0.90% (91 runs sampled)
✗  fast.js        :
✓  lodash          x 3,725,661 ops/sec ±0.77% (91 runs sampled)
Fastest is node-extensions

indexOf without context
✓  native          x 3,378,614 ops/sec ±1.13% (93 runs sampled)
✓  node-extensions x 27,837,883 ops/sec ±1.05% (90 runs sampled)
✓  fast.js         x 29,619,885 ops/sec ±1.26% (95 runs sampled)
✓  lodash          x 19,271,841 ops/sec ±0.90% (96 runs sampled)
Fastest is fast.js

lastIndexOf without context
✓  native          x 3,508,460 ops/sec ±0.92% (95 runs sampled)
✓  node-extensions x 17,657,867 ops/sec ±0.99% (95 runs sampled)
✓  fast.js         x 22,199,356 ops/sec ±0.85% (95 runs sampled)
✓  lodash          x 20,862,723 ops/sec ±1.29% (94 runs sampled)
Fastest is fast.js

indexOf with context
✓  native          x 3,604,848 ops/sec ±0.78% (97 runs sampled)
✓  node-extensions x 36,076,423 ops/sec ±1.18% (93 runs sampled)
✓  fast.js         x 38,495,183 ops/sec ±1.72% (90 runs sampled)
✓  lodash          x 23,835,526 ops/sec ±1.07% (94 runs sampled)
Fastest is fast.js

lastIndexOf with context
✓  native          x 3,539,706 ops/sec ±1.27% (90 runs sampled)
✓  node-extensions x 18,000,644 ops/sec ±1.54% (90 runs sampled)
✓  fast.js         x 23,363,603 ops/sec ±1.36% (92 runs sampled)
✓  lodash          x 15,136,999 ops/sec ±0.77% (96 runs sampled)
Fastest is fast.js

reduce without context
✓  native          x 2,372,135 ops/sec ±1.24% (92 runs sampled)
✓  node-extensions x 21,679,528 ops/sec ±1.29% (92 runs sampled)
✓  fast.js         x 23,746,032 ops/sec ±1.27% (89 runs sampled)
✓  lodash          x 14,636,784 ops/sec ±1.23% (94 runs sampled)
Fastest is fast.js

reduceRight without context
✓  native          x 2,319,410 ops/sec ±0.96% (95 runs sampled)
✓  node-extensions x 16,119,369 ops/sec ±1.64% (91 runs sampled)
✓  fast.js         x 23,485,773 ops/sec ±1.32% (90 runs sampled)
✓  lodash          x 14,201,931 ops/sec ±1.18% (93 runs sampled)
Fastest is fast.js

reduce with context
✓  native          x 2,287,785 ops/sec ±1.22% (91 runs sampled)
✓  node-extensions x 24,955,740 ops/sec ±0.92% (92 runs sampled)
✓  fast.js         x 23,853,912 ops/sec ±1.26% (94 runs sampled)
✓  lodash          x 15,020,358 ops/sec ±0.91% (95 runs sampled)
Fastest is node-extensions

reduceRight with context
✓  native          x 2,291,703 ops/sec ±1.16% (93 runs sampled)
✓  node-extensions x 19,998,950 ops/sec ±0.84% (94 runs sampled)
✓  fast.js         x 21,392,209 ops/sec ±1.13% (94 runs sampled)
✓  lodash          x 12,964,853 ops/sec ±1.37% (91 runs sampled)
Fastest is fast.js
```
