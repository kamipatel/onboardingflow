sfdx force:auth:web:login -d -a devhub
kamlesh.patel-iynd@force.com

sfdx force:org:create -f config/project-scratch-def.json -d 30 -a so
test-wi1qtkddqp6p@example.com

sfdx force:source:push -u so

sfdx force:org:open  -u so

sfdx force:source:pull -u so

Flows
oboarding
batchcharge

sfdx force:source:retrieve --manifest ./manifest/package.xml -u devhub

sfdx force:source:deploy -m LightningComponentBundle -u devhub
sfdx force:source:deploy -m ApexClass -u devhub

sfdx force:source:deploy --manifest ./manifest/package.xml -u devhub


============Stripe=========================
curl https://api.stripe.com/v1/tokens \
  -u sk_test_TMmf9rdailPthIDjqtCXfLfZ00DMrXjxSE: \
  -d card[number]=4242424242424242 \
  -d card[exp_month]=12 \
  -d card[exp_year]=2020 \
  -d card[cvc]=123

"id": "tok_1F9wcqIIILj3e6xLfwH9zr8f",


  curl https://api.stripe.com/v1/charges \
  -u sk_test_TMmf9rdailPthIDjqtCXfLfZ00DMrXjxSE: \
  -d amount=2000 \
  -d currency=usd \
  -d source=tok_1F9wcqIIILj3e6xLfwH9zr8f \
  -d description="Charge for jenny.rosen@example.com"