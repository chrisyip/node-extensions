```
Using node 3.0.0
Using node-extensions 1.5.3, fast.js ^0.1.1, lodash ^3.10.1

Running Array benchmarks...

forEach without context
✓  native          x 2,477,861 ops/sec ±0.88% (95 runs sampled)
✓  node-extensions x 8,871,177 ops/sec ±1.03% (90 runs sampled)
✓  fast.js         x 26,347,050 ops/sec ±1.51% (94 runs sampled)
✓  lodash          x 8,247,688 ops/sec ±1.05% (94 runs sampled)
Fastest is fast.js

map without context
✓  native          x 1,924,471 ops/sec ±1.22% (95 runs sampled)
✓  node-extensions x 10,966,588 ops/sec ±1.34% (95 runs sampled)
✓  fast.js         x 16,139,510 ops/sec ±1.28% (95 runs sampled)
✓  lodash          x 11,707,083 ops/sec ±1.38% (92 runs sampled)
Fastest is fast.js

some without context
✓  native          x 2,543,756 ops/sec ±1.36% (93 runs sampled)
✓  node-extensions x 22,234,943 ops/sec ±1.24% (94 runs sampled)
✓  fast.js         x 25,761,414 ops/sec ±1.30% (94 runs sampled)
✓  lodash          x 11,322,018 ops/sec ±1.56% (92 runs sampled)
Fastest is fast.js

every without context
✓  native          x 3,786,797 ops/sec ±1.26% (93 runs sampled)
✓  node-extensions x 27,344,379 ops/sec ±1.16% (95 runs sampled)
✓  fast.js         x 26,106,843 ops/sec ±1.62% (87 runs sampled)
✓  lodash          x 22,427,597 ops/sec ±1.22% (93 runs sampled)
Fastest is node-extensions

filter without context
✓  native          x 1,914,021 ops/sec ±1.33% (90 runs sampled)
✓  node-extensions x 18,492,914 ops/sec ±1.73% (92 runs sampled)
✓  fast.js         x 23,337,069 ops/sec ±1.14% (91 runs sampled)
✓  lodash          x 15,047,095 ops/sec ±1.08% (95 runs sampled)
Fastest is fast.js

find without context
✗  native         :
✓  node-extensions x 21,420,713 ops/sec ±1.16% (91 runs sampled)
✗  fast.js        :
✓  lodash          x 16,953,370 ops/sec ±1.02% (95 runs sampled)
Fastest is node-extensions

findIndex without context
✗  native         :
✓  node-extensions x 22,467,728 ops/sec ±1.17% (91 runs sampled)
✗  fast.js        :
✓  lodash          x 18,005,669 ops/sec ±0.98% (93 runs sampled)
Fastest is node-extensions

forEach with context
✓  native          x 2,412,773 ops/sec ±1.23% (92 runs sampled)
✓  node-extensions x 3,744,829 ops/sec ±4.57% (77 runs sampled)
✓  fast.js         x 4,594,911 ops/sec ±1.28% (96 runs sampled)
✓  lodash          x 3,884,969 ops/sec ±1.33% (91 runs sampled)
Fastest is fast.js

map with context
✓  native          x 1,879,472 ops/sec ±1.32% (93 runs sampled)
✓  node-extensions x 3,417,553 ops/sec ±1.63% (87 runs sampled)
✓  fast.js         x 3,896,908 ops/sec ±1.25% (93 runs sampled)
✓  lodash          x 3,566,038 ops/sec ±1.08% (93 runs sampled)
Fastest is fast.js

some with context
✓  native          x 2,562,996 ops/sec ±1.19% (96 runs sampled)
✓  node-extensions x 4,441,055 ops/sec ±1.26% (94 runs sampled)
✓  fast.js         x 4,279,417 ops/sec ±1.24% (93 runs sampled)
✓  lodash          x 3,599,209 ops/sec ±2.16% (90 runs sampled)
Fastest is node-extensions

every with context
✓  native          x 3,707,655 ops/sec ±1.07% (91 runs sampled)
✓  node-extensions x 13,889,255 ops/sec ±1.69% (90 runs sampled)
✓  fast.js         x 13,236,467 ops/sec ±1.16% (92 runs sampled)
✓  lodash          x 8,384,058 ops/sec ±1.01% (94 runs sampled)
Fastest is node-extensions

filter with context
✓  native          x 1,984,661 ops/sec ±1.32% (93 runs sampled)
✓  node-extensions x 4,199,273 ops/sec ±1.44% (86 runs sampled)
✓  fast.js         x 4,220,524 ops/sec ±1.50% (89 runs sampled)
✓  lodash          x 2,689,129 ops/sec ±1.27% (94 runs sampled)
Fastest is fast.js        ,node-extensions

find with context
✗  native         :
✓  node-extensions x 4,524,995 ops/sec ±1.04% (92 runs sampled)
✗  fast.js        :
✓  lodash          x 2,703,408 ops/sec ±1.31% (91 runs sampled)
Fastest is node-extensions

findIndex with context
✗  native         :
✓  node-extensions x 4,556,672 ops/sec ±1.23% (96 runs sampled)
✗  fast.js        :
✓  lodash          x 2,791,676 ops/sec ±1.21% (92 runs sampled)
Fastest is node-extensions

indexOf without context
✓  native          x 3,727,996 ops/sec ±0.88% (96 runs sampled)
✓  node-extensions x 30,764,150 ops/sec ±0.99% (97 runs sampled)
✓  fast.js         x 25,305,884 ops/sec ±1.14% (90 runs sampled)
✓  lodash          x 24,691,434 ops/sec ±0.99% (96 runs sampled)
Fastest is node-extensions

lastIndexOf without context
✓  native          x 3,817,890 ops/sec ±1.13% (92 runs sampled)
✓  node-extensions x 22,657,218 ops/sec ±1.22% (93 runs sampled)
✓  fast.js         x 24,569,082 ops/sec ±1.32% (92 runs sampled)
✓  lodash          x 21,813,927 ops/sec ±1.99% (91 runs sampled)
Fastest is fast.js

indexOf with context
✓  native          x 3,758,030 ops/sec ±1.21% (93 runs sampled)
✓  node-extensions x 42,911,492 ops/sec ±1.36% (95 runs sampled)
✓  fast.js         x 38,981,872 ops/sec ±1.24% (94 runs sampled)
✓  lodash          x 32,864,920 ops/sec ±1.20% (92 runs sampled)
Fastest is node-extensions

lastIndexOf with context
✓  native          x 2,896,166 ops/sec ±1.17% (94 runs sampled)
✓  node-extensions x 29,564,897 ops/sec ±1.05% (96 runs sampled)
✓  fast.js         x 27,870,422 ops/sec ±1.61% (93 runs sampled)
✓  lodash          x 17,110,905 ops/sec ±1.41% (93 runs sampled)
Fastest is node-extensions

reduce without context
✓  native          x 2,730,067 ops/sec ±1.16% (94 runs sampled)
✓  node-extensions x 26,142,405 ops/sec ±1.12% (96 runs sampled)
✓  fast.js         x 24,470,946 ops/sec ±1.14% (94 runs sampled)
✓  lodash          x 17,127,797 ops/sec ±1.15% (94 runs sampled)
Fastest is node-extensions

reduceRight without context
✓  native          x 2,636,682 ops/sec ±1.01% (94 runs sampled)
✓  node-extensions x 20,748,606 ops/sec ±1.65% (88 runs sampled)
✓  fast.js         x 21,005,313 ops/sec ±1.08% (94 runs sampled)
✓  lodash          x 14,504,369 ops/sec ±1.34% (97 runs sampled)
Fastest is fast.js        ,node-extensions

reduce with context
✓  native          x 2,633,667 ops/sec ±1.10% (96 runs sampled)
✓  node-extensions x 28,088,640 ops/sec ±1.46% (91 runs sampled)
✓  fast.js         x 23,956,464 ops/sec ±1.31% (90 runs sampled)
✓  lodash          x 16,158,455 ops/sec ±1.17% (93 runs sampled)
Fastest is node-extensions

reduceRight with context
✓  native          x 2,432,077 ops/sec ±0.93% (92 runs sampled)
✓  node-extensions x 22,924,664 ops/sec ±1.34% (89 runs sampled)
✓  fast.js         x 21,227,961 ops/sec ±1.16% (92 runs sampled)
✓  lodash          x 13,953,350 ops/sec ±1.48% (92 runs sampled)
Fastest is node-extensions

slice on array
✓  native          x 2,769,902 ops/sec ±1.50% (94 runs sampled)
✓  node-extensions x 8,421,680 ops/sec ±1.46% (93 runs sampled)
✗  fast.js        :
✓  lodash          x 14,411,940 ops/sec ±1.25% (94 runs sampled)
Fastest is lodash

slice on obj
✓  native          x 837,662 ops/sec ±1.06% (96 runs sampled)
✓  node-extensions x 8,305,182 ops/sec ±1.24% (96 runs sampled)
✗  fast.js        :
✓  lodash          x 15,749,580 ops/sec ±1.23% (91 runs sampled)
Fastest is lodash
```
