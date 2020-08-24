# Protractor E2E Builder (Sample)

A easily way to build end-to-end tests with protractor framework to angular applications.

Um caminho mais simples de construir testes ponta a ponta com o framework Protractor para aplicações Angular.

## The main goal

O principal objetivo da proposta é oferecer uma estrutura de codificação para testes ponta a ponta baseado no padrão de construtor de objetos e, através disso, obter um código legível semelhante ao exemplo:

```typescript
it('should display welcome message', async () => {
  E2E
    .builder()
    .navigateTo('')
    .and(
      E2EComponent
        .get('welcome');
        .shouldTextBe('Welcome')
    )
    .and(
      E2EComponent
        .get('title');
        .shouldTextBe('protractor-e2e-builder-sample app is running!')
    )
    .run();
});
```
