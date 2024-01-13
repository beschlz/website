resource "aws_s3_bucket" "website_bucket" {
  bucket = var.domain_name

  tags = {
    "project" = "beschlz"
  }
}

resource "aws_s3_bucket_ownership_controls" "s3_bucket_acl_ownership" {
  bucket = aws_s3_bucket.website_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}


resource "aws_s3_bucket_website_configuration" "website_bucket_config" {
  bucket = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.website_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}


resource "aws_s3_bucket_policy" "bucket_acl" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Principal = "*"
        Action = [
          "s3:*",
        ]
        Effect = "Allow"
        Resource = [
          "arn:aws:s3:::${var.domain_name}",
          "arn:aws:s3:::${var.domain_name}/*"
        ]
      },
      {
        Sid = "PublicReadGetObject"
        Principal = "*"
        Action = [
          "s3:GetObject",
        ]
        Effect   = "Allow"
        Resource = [
          "arn:aws:s3:::${var.domain_name}",
          "arn:aws:s3:::${var.domain_name}/*"
        ]
      },
    ]
})

depends_on = [ aws_s3_bucket_public_access_block.example ]
}



output "bucket_domain" {
  value = aws_s3_bucket.website_bucket.website_domain
}

output "website_endpoint" {
  value = aws_s3_bucket.website_bucket.website_endpoint
}
