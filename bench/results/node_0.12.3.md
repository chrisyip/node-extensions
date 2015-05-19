```
Using node 0.12.3
Using node-extensions 1.4.2, fast.js ^0.1.1, lodash ^3.8.0

Running Array benchmarks...

forEach without context
✓  native          x 1,392,455 ops/sec ±0.68% (95 runs sampled)
✓  node-extensions x 21,030,701 ops/sec ±0.98% (94 runs sampled)
✓  fast.js         x 21,708,438 ops/sec ±0.83% (95 runs sampled)
✓  lodash          x 17,213,055 ops/sec ±1.20% (94 runs sampled)
Fastest is fast.js

map without context
✓  native          x 1,179,483 ops/sec ±0.76% (97 runs sampled)
✓  node-extensions x 11,561,679 ops/sec ±2.88% (95 runs sampled)
✓  fast.js         x 8,655,927 ops/sec ±8.88% (91 runs sampled)
✓  lodash          x 5,135,544 ops/sec ±0.80% (95 runs sampled)
Fastest is node-extensions,fast.js

some without context
✓  native          x 1,349,676 ops/sec ±1.04% (95 runs sampled)
✓  node-extensions x 5,858,884 ops/sec ±1.52% (93 runs sampled)
✓  fast.js         x 7,863,289 ops/sec ±1.12% (89 runs sampled)
✓  lodash          x 9,694,750 ops/sec ±9.49% (88 runs sampled)
Fastest is lodash         ,fast.js

every without context
✓  native          x 2,791,246 ops/sec ±0.67% (96 runs sampled)
✓  node-extensions x 11,736,577 ops/sec ±13.18% (89 runs sampled)
✓  fast.js         x 28,560,091 ops/sec ±0.80% (96 runs sampled)
✓  lodash          x 19,984,836 ops/sec ±0.75% (95 runs sampled)
Fastest is fast.js

filter without context
✓  native          x 1,174,462 ops/sec ±0.76% (96 runs sampled)
✓  node-extensions x 5,503,106 ops/sec ±1.04% (92 runs sampled)
✓  fast.js         x 6,966,532 ops/sec ±0.83% (95 runs sampled)
✓  lodash          x 6,595,143 ops/sec ±4.97% (91 runs sampled)
Fastest is fast.js

find without context
✓  native          x 1,426,234 ops/sec ±0.87% (93 runs sampled)
✓  node-extensions x 6,223,039 ops/sec ±1.01% (94 runs sampled)
✗  fast.js        :
✓  lodash          x 6,110,156 ops/sec ±0.76% (95 runs sampled)
Fastest is node-extensions

findIndex without context
✓  native          x 1,352,515 ops/sec ±1.32% (95 runs sampled)
✓  node-extensions x 19,571,732 ops/sec ±1.22% (95 runs sampled)
✗  fast.js        :
✓  lodash          x 6,303,346 ops/sec ±0.90% (95 runs sampled)
Fastest is node-extensions

forEach with context
✓  native          x 1,380,054 ops/sec ±0.53% (97 runs sampled)
✓  node-extensions x 3,557,867 ops/sec ±1.61% (90 runs sampled)
✓  fast.js         x 3,509,602 ops/sec ±0.69% (95 runs sampled)
✓  lodash          x 2,960,244 ops/sec ±1.22% (90 runs sampled)
Fastest is node-extensions

map with context
✓  native          x 1,088,381 ops/sec ±1.98% (90 runs sampled)
✓  node-extensions x 2,132,333 ops/sec ±2.28% (90 runs sampled)
✓  fast.js         x 2,229,305 ops/sec ±3.03% (88 runs sampled)
✓  lodash          x 2,815,142 ops/sec ±2.56% (92 runs sampled)
Fastest is lodash

some with context
✓  native          x 1,321,669 ops/sec ±0.93% (93 runs sampled)
✓  node-extensions x 3,238,805 ops/sec ±3.98% (90 runs sampled)
✓  fast.js         x 3,448,182 ops/sec ±3.21% (88 runs sampled)
✓  lodash          x 2,230,155 ops/sec ±1.40% (95 runs sampled)
Fastest is fast.js

every with context
✓  native          x 2,725,555 ops/sec ±1.08% (95 runs sampled)
✓  node-extensions x 2,690,098 ops/sec ±3.18% (92 runs sampled)
✓  fast.js         x 12,132,666 ops/sec ±3.37% (94 runs sampled)
✓  lodash          x 6,346,417 ops/sec ±1.39% (92 runs sampled)
Fastest is fast.js

filter with context
✓  native          x 1,123,435 ops/sec ±1.33% (90 runs sampled)
✓  node-extensions x 3,483,592 ops/sec ±0.72% (93 runs sampled)
✓  fast.js         x 2,529,872 ops/sec ±1.98% (91 runs sampled)
✓  lodash          x 2,135,663 ops/sec ±2.16% (86 runs sampled)
Fastest is node-extensions

find with context
✓  native          x 1,185,833 ops/sec ±2.24% (88 runs sampled)
✓  node-extensions x 2,309,528 ops/sec ±1.34% (92 runs sampled)
✗  fast.js        :
✓  lodash          x 2,580,373 ops/sec ±3.24% (88 runs sampled)
Fastest is lodash

findIndex with context
✓  native          x 1,263,181 ops/sec ±1.30% (93 runs sampled)
✓  node-extensions x 3,448,520 ops/sec ±1.44% (90 runs sampled)
✗  fast.js        :
✓  lodash          x 2,368,879 ops/sec ±1.02% (94 runs sampled)
Fastest is node-extensions

indexOf without context
✓  native          x 3,184,656 ops/sec ±1.00% (94 runs sampled)
✓  node-extensions x 23,663,115 ops/sec ±1.38% (91 runs sampled)
✓  fast.js         x 26,121,503 ops/sec ±1.07% (94 runs sampled)
✓  lodash          x 19,707,742 ops/sec ±1.05% (90 runs sampled)
Fastest is fast.js

lastIndexOf without context
✓  native          x 3,066,969 ops/sec ±1.29% (91 runs sampled)
✓  node-extensions x 12,358,948 ops/sec ±13.45% (91 runs sampled)
✓  fast.js         x 7,617,871 ops/sec ±0.69% (94 runs sampled)
✓  lodash          x 8,124,519 ops/sec ±6.92% (89 runs sampled)
Fastest is node-extensions

indexOf with context
✓  native          x 3,244,090 ops/sec ±1.34% (90 runs sampled)
✓  node-extensions x 30,488,141 ops/sec ±1.09% (93 runs sampled)
✓  fast.js         x 32,688,215 ops/sec ±1.06% (92 runs sampled)
✓  lodash          x 22,685,351 ops/sec ±1.78% (88 runs sampled)
Fastest is fast.js

lastIndexOf with context
✓  native          x 3,009,800 ops/sec ±1.50% (90 runs sampled)
✓  node-extensions x 5,640,988 ops/sec ±1.34% (90 runs sampled)
✓  fast.js         x 7,666,669 ops/sec ±1.10% (93 runs sampled)
✓  lodash          x 9,480,337 ops/sec ±11.11% (85 runs sampled)
Fastest is lodash         ,fast.js

reduce without context
✓  native          x 1,303,105 ops/sec ±1.50% (92 runs sampled)
✓  node-extensions x 18,389,837 ops/sec ±0.97% (95 runs sampled)
✓  fast.js         x 19,861,494 ops/sec ±1.06% (93 runs sampled)
✓  lodash          x 13,809,036 ops/sec ±1.21% (93 runs sampled)
Fastest is fast.js

reduceRight without context
✓  native          x 1,326,150 ops/sec ±1.07% (93 runs sampled)
✓  node-extensions x 3,538,684 ops/sec ±1.27% (90 runs sampled)
✓  fast.js         x 7,396,560 ops/sec ±5.97% (90 runs sampled)
✓  lodash          x 5,880,398 ops/sec ±1.33% (91 runs sampled)
Fastest is fast.js

reduce with context
✓  native          x 1,205,899 ops/sec ±1.58% (89 runs sampled)
✓  node-extensions x 19,663,437 ops/sec ±1.22% (94 runs sampled)
✓  fast.js         x 18,732,017 ops/sec ±1.69% (87 runs sampled)
✓  lodash          x 13,767,057 ops/sec ±1.42% (89 runs sampled)
Fastest is node-extensions

reduceRight with context
✓  native          x 1,301,304 ops/sec ±0.90% (95 runs sampled)
✓  node-extensions x 5,987,310 ops/sec ±3.03% (90 runs sampled)
✓  fast.js         x 7,838,422 ops/sec ±5.22% (94 runs sampled)
✓  lodash          x 6,180,432 ops/sec ±0.82% (95 runs sampled)
Fastest is fast.js
```
