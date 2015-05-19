```
Using node 0.10.38
Using node-extensions 1.4.2, fast.js ^0.1.1, lodash ^3.8.0

Running Array benchmarks...

forEach without context
✓  native          x 1,317,291 ops/sec ±1.03% (92 runs sampled)
✓  node-extensions x 8,491,178 ops/sec ±0.87% (94 runs sampled)
✓  fast.js         x 8,620,302 ops/sec ±1.26% (92 runs sampled)
✓  lodash          x 8,329,677 ops/sec ±0.68% (96 runs sampled)
Fastest is fast.js

map without context
✓  native          x 892,302 ops/sec ±1.50% (77 runs sampled)
✓  node-extensions x 3,525,616 ops/sec ±1.02% (93 runs sampled)
✓  fast.js         x 7,065,394 ops/sec ±1.29% (92 runs sampled)
✓  lodash          x 6,027,636 ops/sec ±1.20% (93 runs sampled)
Fastest is fast.js

some without context
✓  native          x 1,381,918 ops/sec ±1.00% (91 runs sampled)
✓  node-extensions x 8,471,029 ops/sec ±1.31% (95 runs sampled)
✓  fast.js         x 8,533,795 ops/sec ±0.99% (94 runs sampled)
✓  lodash          x 7,900,585 ops/sec ±1.27% (93 runs sampled)
Fastest is fast.js,node-extensions

every without context
✓  native          x 2,353,993 ops/sec ±0.88% (95 runs sampled)
✓  node-extensions x 8,314,243 ops/sec ±1.34% (89 runs sampled)
✓  fast.js         x 25,770,717 ops/sec ±1.20% (89 runs sampled)
✓  lodash          x 22,251,632 ops/sec ±1.69% (88 runs sampled)
Fastest is fast.js

filter without context
✓  native          x 935,008 ops/sec ±2.03% (85 runs sampled)
✓  node-extensions x 7,791,348 ops/sec ±0.73% (97 runs sampled)
✓  fast.js         x 8,380,364 ops/sec ±1.04% (88 runs sampled)
✓  lodash          x 6,927,686 ops/sec ±0.96% (95 runs sampled)
Fastest is fast.js

find without context
✗  native         :
✓  node-extensions x 8,619,853 ops/sec ±1.02% (94 runs sampled)
✗  fast.js        :
✓  lodash          x 6,412,366 ops/sec ±0.80% (95 runs sampled)
Fastest is node-extensions

findIndex without context
✗  native         :
✓  node-extensions x 8,797,035 ops/sec ±0.89% (97 runs sampled)
✗  fast.js        :
✓  lodash          x 7,037,097 ops/sec ±0.83% (95 runs sampled)
Fastest is node-extensions

forEach with context
✓  native          x 1,352,378 ops/sec ±1.00% (93 runs sampled)
✓  node-extensions x 4,117,961 ops/sec ±0.70% (95 runs sampled)
✓  fast.js         x 3,918,056 ops/sec ±1.01% (94 runs sampled)
✓  lodash          x 3,312,040 ops/sec ±0.86% (96 runs sampled)
Fastest is node-extensions

map with context
✓  native          x 944,600 ops/sec ±1.56% (88 runs sampled)
✓  node-extensions x 2,325,706 ops/sec ±0.97% (93 runs sampled)
✓  fast.js         x 3,489,128 ops/sec ±1.11% (93 runs sampled)
✓  lodash          x 3,167,182 ops/sec ±1.26% (90 runs sampled)
Fastest is fast.js

some with context
✓  native          x 1,409,532 ops/sec ±0.74% (96 runs sampled)
✓  node-extensions x 3,847,796 ops/sec ±0.94% (92 runs sampled)
✓  fast.js         x 3,953,253 ops/sec ±0.91% (94 runs sampled)
✓  lodash          x 3,221,465 ops/sec ±1.17% (89 runs sampled)
Fastest is fast.js

every with context
✓  native          x 2,364,895 ops/sec ±1.18% (90 runs sampled)
✓  node-extensions x 3,845,048 ops/sec ±0.77% (92 runs sampled)
✓  fast.js         x 13,303,693 ops/sec ±1.11% (93 runs sampled)
✓  lodash          x 7,496,651 ops/sec ±1.34% (89 runs sampled)
Fastest is fast.js

filter with context
✓  native          x 930,446 ops/sec ±1.88% (85 runs sampled)
✓  node-extensions x 3,791,172 ops/sec ±0.82% (93 runs sampled)
✓  fast.js         x 3,668,729 ops/sec ±1.12% (91 runs sampled)
✓  lodash          x 3,349,201 ops/sec ±0.98% (92 runs sampled)
Fastest is node-extensions

find with context
✗  native         :
✓  node-extensions x 3,863,817 ops/sec ±1.10% (93 runs sampled)
✗  fast.js        :
✓  lodash          x 3,207,749 ops/sec ±0.81% (94 runs sampled)
Fastest is node-extensions

findIndex with context
✗  native         :
✓  node-extensions x 3,933,228 ops/sec ±1.22% (94 runs sampled)
✗  fast.js        :
✓  lodash          x 3,258,450 ops/sec ±0.85% (94 runs sampled)
Fastest is node-extensions

indexOf without context
✓  native          x 3,145,517 ops/sec ±1.05% (91 runs sampled)
✓  node-extensions x 22,688,065 ops/sec ±0.96% (93 runs sampled)
✓  fast.js         x 32,185,619 ops/sec ±0.82% (93 runs sampled)
✓  lodash          x 25,487,629 ops/sec ±0.92% (92 runs sampled)
Fastest is fast.js

lastIndexOf without context
✓  native          x 3,087,057 ops/sec ±0.89% (95 runs sampled)
✓  node-extensions x 20,073,340 ops/sec ±1.43% (91 runs sampled)
✓  fast.js         x 26,939,770 ops/sec ±0.85% (91 runs sampled)
✓  lodash          x 20,910,713 ops/sec ±1.30% (87 runs sampled)
Fastest is fast.js

indexOf with context
✓  native          x 2,980,706 ops/sec ±0.91% (96 runs sampled)
✓  node-extensions x 33,138,931 ops/sec ±0.77% (97 runs sampled)
✓  fast.js         x 42,234,832 ops/sec ±1.51% (86 runs sampled)
✓  lodash          x 32,240,981 ops/sec ±0.90% (95 runs sampled)
Fastest is fast.js

lastIndexOf with context
✓  native          x 3,057,686 ops/sec ±1.35% (93 runs sampled)
✓  node-extensions x 28,610,412 ops/sec ±3.51% (85 runs sampled)
✓  fast.js         x 30,414,664 ops/sec ±0.92% (92 runs sampled)
✓  lodash          x 23,415,618 ops/sec ±0.70% (95 runs sampled)
Fastest is fast.js,node-extensions

reduce without context
✓  native          x 1,416,857 ops/sec ±1.21% (92 runs sampled)
✓  node-extensions x 8,758,884 ops/sec ±1.07% (91 runs sampled)
✓  fast.js         x 9,139,142 ops/sec ±0.66% (95 runs sampled)
✓  lodash          x 7,765,669 ops/sec ±0.93% (95 runs sampled)
Fastest is fast.js

reduceRight without context
✓  native          x 1,368,541 ops/sec ±0.80% (94 runs sampled)
✓  node-extensions x 6,426,691 ops/sec ±1.49% (90 runs sampled)
✓  fast.js         x 8,750,044 ops/sec ±0.89% (94 runs sampled)
✓  lodash          x 8,151,310 ops/sec ±1.19% (94 runs sampled)
Fastest is fast.js

reduce with context
✓  native          x 1,385,780 ops/sec ±0.83% (94 runs sampled)
✓  node-extensions x 8,791,536 ops/sec ±0.70% (96 runs sampled)
✓  fast.js         x 8,135,236 ops/sec ±1.17% (90 runs sampled)
✓  lodash          x 7,446,785 ops/sec ±0.86% (96 runs sampled)
Fastest is node-extensions

reduceRight with context
✓  native          x 1,312,477 ops/sec ±0.88% (94 runs sampled)
✓  node-extensions x 8,837,576 ops/sec ±1.14% (94 runs sampled)
✓  fast.js         x 8,390,065 ops/sec ±0.58% (96 runs sampled)
✓  lodash          x 7,646,489 ops/sec ±0.98% (96 runs sampled)
Fastest is node-extensions
```
