import {test} from 'node:test';
import assert from 'node:assert/strict';
import {ROMAJI_ALTERNATIVES,evaluateStep,mecaEvaluate} from '../samples/romaji.js';
for(const [canonical,aliases] of Object.entries(ROMAJI_ALTERNATIVES))test('complete aliases win over prefixes: '+canonical,()=>{for(const alias of aliases){assert.equal(evaluateStep(alias,canonical),'success');assert.equal(mecaEvaluate(alias,canonical,'仮'),'hit');}});
test('incremental input has neutral, partial, complete and invalid states',()=>{assert.equal(evaluateStep('','shi'),'neutral');assert.equal(evaluateStep('sh','shi'),'progress');assert.equal(evaluateStep('shi','shi'),'success');assert.equal(evaluateStep('sx','shi'),'error');});
test('MECA accepts normalized roman letters and direct kana',()=>{assert.equal(mecaEvaluate(' SI ','shi','し'),'hit');assert.equal(mecaEvaluate('し','shi','し'),'hit');assert.equal(mecaEvaluate('か','kan','かん'),'prefix');});
test('alias prefixes stay pending, extra characters fail',()=>{assert.equal(mecaEvaluate('sy','sha','しゃ'),'prefix');assert.equal(mecaEvaluate('syaa','sha','しゃ'),'error');});
test('the lower-level step API deliberately does not trim or lowercase',()=>assert.equal(evaluateStep(' SI ','shi'),'error'));
test('empty and whitespace MECA input remain pending',()=>{assert.equal(mecaEvaluate('','shi','し'),'prefix');assert.equal(mecaEvaluate('  ','shi','し'),'prefix');});
