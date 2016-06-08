# Html2img

This gem enables you to download HTML elements at the click of a button. Requires JQuery.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'html2img'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install html2img

## Usage

On the button that you want to start the download with add in the HTML of the element the class ```html2img-#download-#<id>``` where <id> is the id attribute of the element you want to download.

An example
```html
<div id="block" style="height: 200px; width: 200px; background-color: pink;"></div>

<input type="button" class="html2img-#download-#block btn" value="Download"/>

``` 

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/edmothershaw/html2img. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

