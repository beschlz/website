

variable "domain" {
  default     = "bschulz.dev"
  description = "the domain that this application is hosted under"
}

variable "cloudflare_token" {
  default = ""
  description = "Cloudflare Access Token"
}