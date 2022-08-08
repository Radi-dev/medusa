import { TaxProviderService } from "../../../../services"

/**
 * @oas [get] /store/tax-providers
 * operationId: "GetStoreTaxProviders"
 * summary: "Retrieve configured Tax Providers"
 * description: "Retrieves the configured Tax Providers"
 * x-authenticated: true
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in
 *       medusa.admin.store.listTaxProviders()
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'localhost:9000/admin/store/tax-providers' \
 *       --header 'Authorization: Bearer {api_token}'
 * tags:
 *   - Store
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             tax_providers:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/tax_provider"
 */
export default async (req, res) => {
  const taxProviderService: TaxProviderService =
    req.scope.resolve("taxProviderService")
  const taxProviders = await taxProviderService.list()
  res.status(200).json({ tax_providers: taxProviders })
}
