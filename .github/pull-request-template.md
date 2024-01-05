<!-- markdownlint-disable -->
<details>
<summary><string>tip</strong> - fold / Unfold.</summary>

1. `??` でくくられている範囲を編集し、`??` が残らないようにすること
    1. `??? ` で始まる行は行ごと削除する
</details>

## 詳細
1. ?? 理由などを明確に書く ??
1. #xxx ??? issueがあれば書く

## Checklist
### pull request 作成時
1. [ ] markdownのルールに沿って記述した
1. [ ] ラベルを付けた
    1. `feature/xxx` -> `enhancement`
    1. `bugfix/xxx` -> `bug`
1. ローカルで動作確認をし、エラーがないことを確認した
    1. [ ] `pnpm run start` で表示確認をした
    1. [ ] `pnpm run build`　でリンク切れやwarn、errorが0件であることを確認した
1. [ ] commitする前にフォーマットした
    1. formatter: ※windowsの場合 `shift + alt + f`
1. [ ] これより上に `??` や `???` がないことを確認した
1. [ ] タイトルにissue番号とタイトルが含まれていることを確認した
1. [ ] merge先が `main` になっていることを確認した

### merge する時
1. [ ] actionsですべてsuccessになっていることを確認した

<!-- markdownlint-enable -->
