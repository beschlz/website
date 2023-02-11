data "aws_iam_policy_document" "website_policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    resources = [
      "arn:aws:s3:::${var.domain_name}/*"
    ]
  }
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = var.domain_name

  policy = data.aws_iam_policy_document.website_policy.json
  tags = {
    "project" = "beschlz"
  }
}

resource "aws_s3_bucket_website_configuration" "website_bucket_config" {
  bucket = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  bucket = aws_s3_bucket.website_bucket.id
  acl    = "public-read"
}


output "bucket_domain" {
  value = aws_s3_bucket.website_bucket.website_domain
}

output "website_endpoint" {
  value = aws_s3_bucket.website_bucket.website_endpoint
}
